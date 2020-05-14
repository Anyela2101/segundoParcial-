import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasajeroRegistroComponent} from './viaje/pasajero-registro/pasajero-registro.component';
import {PasajeroConsultaComponent} from './viaje/pasajero-consulta/pasajero-consulta.component';
import {Routes, RouterModule} from '@angular/router';


const routes:Routes=[
  {
    path: 'pasajeroConsulta',
    component: PasajeroConsultaComponent
  },
  {
    path: 'pasajeroRegistro',
    component: PasajeroRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
