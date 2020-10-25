import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDevicesComponent } from 'app/devices/add-devices/add-devices.component';
import { ListDevicesComponent } from 'app/devices/list-devices/list-devices.component';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2'
        }
      },
      { path: 'devices/add-devices', component: AddDevicesComponent, data: { title: 'Agregar dispositivos'}},
      { path: 'devices/list-devices', component: ListDevicesComponent, data: { title: 'Listar dispositivos'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
