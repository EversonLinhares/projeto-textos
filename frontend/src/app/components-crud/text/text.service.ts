import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Text } from './text.model';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TextService {

  urlBase = "http://localhost:3002/textos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  read(): Observable<Text[]>{
      return this.http.get<Text[]>(this.urlBase)
  }

  create(text: Text): Observable<Text>{
    return this.http.post<Text>(this.urlBase, text).pipe(
    map((obj) => obj),
    catchError(e => this.renderError(e))
    );
  }

  renderError(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro...', true)
    console.log(e)
    return EMPTY
  }

  readById(id: number): Observable<Text>{
    const url = `${this.urlBase}/${id}`
    return this.http.get<Text>(url).pipe(
      map((obj) => obj),
      catchError(e => this.renderError(e))
      );
  }
  
  update(text: Text): Observable<Text>{
    const url = `${this.urlBase}/${text.id}`
    return this.http.put<Text>(url, text).pipe(
      map((obj) => obj),
      catchError(e => this.renderError(e))
      );
  }
  
  delete(id: number): Observable<Text>{
    const url = `${this.urlBase}/${id}`
    return this.http.delete<Text>(url).pipe(
      map((obj) => obj),
      catchError(e => this.renderError(e))
      );

  }
  
}
