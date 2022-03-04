import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from './../text.service';
import { Component, OnInit } from '@angular/core';
import { Text } from '../text.model';

@Component({
  selector: 'app-text-update',
  templateUrl: './text-update.component.html',
  styleUrls: ['./text-update.component.css']
})
export class TextUpdateComponent implements OnInit {

  text: Text

  constructor(
    private textService: TextService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.textService.readById(id).subscribe(text =>{
      this.text = text
    });
  }

  updateText(): void{
    this.textService.update(this.text)
    .subscribe(() => {
      this.textService.showMessage('Texto atualizado com sucesso!')
    })
    setTimeout(() =>{
      this.router.navigate(['/texts'])
    },2500)
  }

  cancelText(): void{
    this.router.navigate(['/texts'])
  }

}
