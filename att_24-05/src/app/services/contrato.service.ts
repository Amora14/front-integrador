import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContratoModule } from '../models/contrato/contrato.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  http = inject(HttpClient);
  API= "http://26.237.110.123:8080/api/contrato";

  constructor() { }

  save(contrato: ContratoModule): Observable<string>{ 
    return this.http.post<string>(this.API+"/save", contrato,{responseType:'text' as 'json'});
  }

  listAll(): Observable<ContratoModule[]>{ 
    return this.http.get<ContratoModule[]>(this.API+"/listAll");
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.API + "/delete/" + id, {responseType:'text' as 'json'});
  }

  findById(id: number): Observable<ContratoModule>{ 
    return this.http.get<ContratoModule>(this.API+"/findById/" + id);
  }
}
