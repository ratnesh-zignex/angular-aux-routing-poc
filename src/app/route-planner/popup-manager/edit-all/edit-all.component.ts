import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GridPopoutService } from '../../shared/services/grid-popout.service';
import { Subject, debounceTime } from 'rxjs';

interface IZEditAllColumn {
  binding: string;
  header: string;
  type: string;
  fieldID: string;
}

@Component({
  selector: 'app-edit-all',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-all.component.html',
  styleUrls: ['./edit-all.component.scss']
})
export class EditAllComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private popoutService = inject(GridPopoutService);

  editAllForm: FormGroup;
  isSubmitting = false;
  
  // Columns definition (Simulating allowed columns from reference)
  columns: IZEditAllColumn[] = [
    { binding: 'sNo', header: 'Seq #', type: 'number', fieldID: 'cid' },
    { binding: 'sOLNo', header: 'Load #', type: 'number', fieldID: 'cid' },
    { binding: 'rNo', header: 'Route #', type: 'dropdown', fieldID: 'cid' },
    { binding: 'addr', header: 'Address', type: 'text', fieldID: 'cid' },
    { binding: 'cty', header: 'City', type: 'text', fieldID: 'cid' },
    { binding: 'srvcOrdrWtVal', header: 'Weight per Cont. (Lbs)', type: 'number', fieldID: 'cid' },
    { binding: 'srvctm', header: 'Srvc Time per Cont. (Secs)', type: 'number', fieldID: 'cid' },
    { binding: 'tTsrv', header: 'Time to Serve (Secs)', type: 'number', fieldID: 'cid' },
    { binding: 'adTm', header: 'Addln Srvc Tm', type: 'number', fieldID: 'cid' },
    { binding: 'oPr', header: 'Priority', type: 'number', fieldID: 'cid' },
    { binding: 'strtm', header: 'Start Time', type: 'time', fieldID: 'cid' },
    { binding: 'stptm', header: 'Stop Time', type: 'time', fieldID: 'cid' }
  ];

  selectedColInfo: any = {};
  
  constructor() {
    this.editAllForm = this.fb.group({
      colName: ['', Validators.required],
      colValue: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Watch for column changes to update validators and type
    this.editAllForm.get('colName')?.valueChanges
      .pipe(debounceTime(200))
      .subscribe(val => this.onColumnChange(val));
      
    // Default selection
    this.editAllForm.get('colName')?.setValue('sNo');
  }

  get selectedColType(): string {
    return this.selectedColInfo.type || 'text';
  }

  get sortedColumns() {
      return this.columns.sort((a, b) => a.header.localeCompare(b.header));
  }

  onColumnChange(colName: string) {
    const col = this.columns.find(c => c.binding === colName);
    if (col) {
      this.selectedColInfo = col;
      this.editAllForm.get('colValue')?.setValue('');
      this.editAllForm.get('colValue')?.clearValidators();
      
      const validators = [Validators.required];
      if (col.type === 'number') {
        validators.push(Validators.pattern(/^-?\d*\.?\d+$/));
      }
      this.editAllForm.get('colValue')?.setValidators(validators);
      this.editAllForm.get('colValue')?.updateValueAndValidity();
    }
  }

  closePopup() {
    this.close.emit();
    this.editAllForm.reset();
  }

  submitForm() {
      console.log('EditAllComponent: Submitting. Form Valid:', this.editAllForm.valid, 'Errors:', this.editAllForm.errors);
      
      if (this.editAllForm.valid) {
        this.isSubmitting = true;
        const { colName, colValue } = this.editAllForm.value;
        const colDef = this.columns.find(c => c.binding === colName);
        
        if (!colDef) {
          console.error('EditAllComponent: Column definition not found for', colName);
          return;
        }

        // Construct Payload similar to reference
        const payload = {
          clKey: colName,
          clVal: String(colValue).trim(), // Text representation
          fieldID: colDef.fieldID,
          // Additional metadata to help PlannerComponent
          isNumeric: colDef.type === 'number'
        };

        console.log('EditAllComponent: Triggering update with payload', payload);
        
        // Trigger local event for PlannerComponent
        this.popoutService.triggerEditAll(payload);
        
        this.isSubmitting = false;
        this.closePopup();
      } else {
        console.warn('EditAllComponent: Form invalid', this.editAllForm.errors);
        this.editAllForm.markAllAsTouched();
      }
  }
}
