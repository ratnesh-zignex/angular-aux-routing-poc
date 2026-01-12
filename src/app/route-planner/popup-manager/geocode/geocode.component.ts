import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geocode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './geocode.component.html',
  styleUrl: './geocode.component.scss'
})
export class GeocodeComponent {
  @Input() data: any;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
