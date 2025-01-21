import { Component } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent {
  // Variable para controlar la visibilidad del formulario
  showForm = false;

  // Datos predeterminados de mesas
  tables = [
    { number: 1, status: 'Desocupada', notes: '', peopleCount: 4, location: 'Frente a la ventana' },
    { number: 2, status: 'Desocupada', notes: '', peopleCount: 2, location: 'Al lado del bar' },
    { number: 3, status: 'En proceso', notes: 'S/N', peopleCount: 4, location: 'Mesa central' },
    { number: 4, status: 'Despachada', notes: 'Pedido especial', peopleCount: 6, location: 'Jardín' }
  ];

  // Datos del formulario para nueva mesa
  newTableData = {
    number: 0, // Cambié null por 0 para evitar problemas de tipo
    status: 'Desocupada',
    notes: '',
    peopleCount: 0, // Cambié null por 0 para evitar problemas de tipo
    location: ''
  };

  // Función para agregar una nueva mesa
  addTable() {
    // Validar que 'number' y 'peopleCount' no sean 0 antes de agregar
    if (this.newTableData.number && this.newTableData.peopleCount && this.newTableData.location) {
      const newTable = {
        number: this.newTableData.number,
        status: this.newTableData.status,
        notes: this.newTableData.notes,
        peopleCount: this.newTableData.peopleCount,
        location: this.newTableData.location
      };

      this.tables.push(newTable); // Agregar la nueva mesa
      this.showForm = false;
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  // Función para reiniciar el formulario
  resetForm() {
    this.newTableData = {
      number: 0,
      status: 'Desocupada',
      notes: '',
      peopleCount: 0,
      location: ''
    };
  }
}
