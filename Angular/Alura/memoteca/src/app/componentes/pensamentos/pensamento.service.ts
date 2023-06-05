import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';



// Considerando essa boa prática, é necessário criar um arquivo service (serviço, em português) que contenha a lógica de negócios
// e que seja responsável pela comunicação com o servidor. Este arquivo contém todas as requisições ao servidor, ao mesmo tempo que
// nos auxilia a separar informações importantes e o modo de obtê-las.
//ng g s componentes/pensamentos/pensamento

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) //injetando o HTTPCLIENT
  { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }
  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
