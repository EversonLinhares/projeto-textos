import { Component, OnInit } from '@angular/core';
import { TextService } from './../text.service';
import { Router } from '@angular/router';
import { Text } from './../text.model';
@Component({
  selector: 'app-text-create',
  templateUrl: './text-create.component.html',
  styleUrls: ['./text-create.component.css']
})
export class TextCreateComponent implements OnInit {

  text: Text = {
       title: '',
       text: ''
  }

  constructor(private textService: TextService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createText(): void{
    this.textService.create(this.text)
         .subscribe(() => {
           this.textService.showMessage("Texto criado com sucesso!")
          })
          setTimeout(()=>{
            this.router.navigate(['/texts'])
           },2500)


  }
  
  cancelText(): void{
    this.router.navigate(['/texts'])
  }
}
