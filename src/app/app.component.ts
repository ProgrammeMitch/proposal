import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rowData: any[] = [
    {make: 'Master', number: 1},
    {make: 'Student', number: 2},
    {make: 'Apprentice', number: 3}
  ];

@ViewChild(AgGridAngular) agGrid!: AgGridAngular;


  colDefs: ColDef[] = [
    {field: 'make' },
    {field: 'number'}
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }

  // onCellClicked( event: CellClickedEvent){
  //   console.log(event);
  // }

  clearSelection() {
    this.agGrid.api.selectAll();
  }
}
