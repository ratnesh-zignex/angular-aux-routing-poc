import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { IZToolType } from '../../../shared/interfaces/interfaces';

interface ToolbarButton {
  name: IZToolType;
  icon: string;
  tooltip: string;
  isActive: boolean;
}

@Component({
  selector: 'app-map-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class MapToolbarComponent {
  @Output() toolActivated = new EventEmitter<IZToolType>();
  @Output() toolDeactivated = new EventEmitter<IZToolType>();

  activeTool: IZToolType | null = null;

  buttons: ToolbarButton[] = [
    {
      name: IZToolType.BoxSelection,
      icon: '☐',
      tooltip: 'Rectangle Selection',
      isActive: false,
    },
    {
      name: IZToolType.Eraser,
      icon: '⌫',
      tooltip: 'Clear Selection',
      isActive: false,
    },
  ];

  onButtonClick(button: ToolbarButton): void {
    if (button.name === IZToolType.Eraser) {
      // 1. Deactivate current active tool (e.g. Box Selection) if any
      if (this.activeTool) {
        const prevButton = this.buttons.find((b) => b.name === this.activeTool);
        if (prevButton) {
          prevButton.isActive = false;
          this.toolDeactivated.emit(prevButton.name);
        }
        this.activeTool = null;
      }
      
      // 2. Fire Eraser action
      this.toolActivated.emit(button.name);
      return;
    }

    // Toggle behavior for other tools
    if (this.activeTool === button.name) {
      // Deactivate current tool
      this.activeTool = null;
      button.isActive = false;
      this.toolDeactivated.emit(button.name);
    } else {
      // Deactivate previous tool
      if (this.activeTool) {
        const prevButton = this.buttons.find((b) => b.name === this.activeTool);
        if (prevButton) {
          prevButton.isActive = false;
          this.toolDeactivated.emit(prevButton.name);
        }
      }
      // Activate new tool
      this.activeTool = button.name;
      button.isActive = true;
      this.toolActivated.emit(button.name);
    }
  }

  isButtonActive(button: ToolbarButton): boolean {
    return button.name === this.activeTool;
  }
}
