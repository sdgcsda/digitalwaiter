import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.css']
})
export class TableCreateComponent {
  @Output() close = new EventEmitter<void>();

  closeForm() {
    this.close.emit(); // Emite el evento de cerrar el formulario
  }
}
