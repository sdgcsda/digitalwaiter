import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableCreateComponent } from './table-create/table-create.component';


const routes: Routes = [
  { path: 'dashboard', component: WaiterDashboardComponent },
  { path: 'table-create', component: TableCreateComponent },
  { path: 'tabla-view', component: TableViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterRoutingModule {}
