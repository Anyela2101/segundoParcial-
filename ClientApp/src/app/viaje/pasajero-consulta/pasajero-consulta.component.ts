import { Component, OnInit } from '@angular/core';
import {Pasajero} from '../models/pasajero';
import {PasajeroService} from '../../services/pasajero.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-pasajero-consulta',
  templateUrl: './pasajero-consulta.component.html',
  styleUrls: ['./pasajero-consulta.component.css']
})
export class PasajeroConsultaComponent implements OnInit {

  pasajeros: Pasajero[];
  searchText: string;
  constructor(private pasajeroService: PasajeroService) { }

  ngOnInit() {
    this.pasajeroService.get().subscribe(result => {this.pasajeros=result;});
  }

}
