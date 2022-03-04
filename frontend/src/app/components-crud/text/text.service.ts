import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Text } from './text.model';


@Injectable({
  providedIn: 'root'
})
export class TextService {

  urlBase = "http://localhost:3002/textos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(text: Text): Observable<Text>{
    return this.http.post<Text>(this.urlBase, text)
    
  }
}
