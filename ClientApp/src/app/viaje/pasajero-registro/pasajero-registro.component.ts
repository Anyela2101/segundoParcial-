import { Component, OnInit } from '@angular/core';
import {Pasajero} from '../models/pasajero';
import {PasajeroService} from '../../services/pasajero.service';

@Component({
  selector: 'app-pasajero-registro',
  templateUrl: './pasajero-registro.component.html',
  styleUrls: ['./pasajero-registro.component.css']
})
export class PasajeroRegistroComponent implements OnInit {

  pasajero: Pasajero;
  constructor(private pasajeroService:PasajeroService) { }

  ngOnInit() {
    this.pasajero=new Pasajero();
  }
  add(){
    this.pasajeroService.post(this.pasajero).subscribe(p=>{
      if(p!=null){
        alert('pasajero Creado! ');
        this.pasajero=p;
      }
    });
  }
}
