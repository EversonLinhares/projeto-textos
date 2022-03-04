import { TextService } from './../text.service';
import { Component, OnInit } from '@angular/core';
import { Text } from '../text.model';

@Component({
  selector: 'app-text-read',
  templateUrl: './text-read.component.html',
  styleUrls: ['./text-read.component.css']
})
export class TextReadComponent implements OnInit {

  texts: Text[];
  displayedColumns = ['id', 'title' , 'text' , 'action']

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.textService.read()
        .subscribe(texts => {
          this.texts = texts
          console.log(texts)
        })

  }

}
