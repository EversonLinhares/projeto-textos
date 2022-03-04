import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-texts',
  templateUrl: './crud-texts.component.html',
  styleUrls: ['./crud-texts.component.css']
})
export class CrudTextsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  naveTextCreate(): void {
    this.router.navigate(['/texts/create'])
  }

}
