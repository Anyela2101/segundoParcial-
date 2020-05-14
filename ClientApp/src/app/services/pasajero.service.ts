import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pasajero} from '../viaje/models/pasajero';
import {HandleHttpErrorService} from '../@base/handle-http-error.service';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseurl:string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl=baseurl;
    }

    get(): Observable<Pasajero[]> {
      return this.http.get<Pasajero[]>(this.baseUrl + 'api/pasajero')
      .pipe(
       tap(_ => this.handleErrorService.log('datos enviados')),
       catchError(this.handleErrorService.handleError<Pasajero[]>('Consultar Pasajero', null))
      );
    }

    post(pasajero:Pasajero): Observable<Pasajero>{
      return this.http.post<Pasajero>(this.baseUrl + 'api/pasajero', pasajero)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Pasajero>('Registrar Pasajero', null))
      );
    }
}
