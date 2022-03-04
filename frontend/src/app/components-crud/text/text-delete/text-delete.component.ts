import { Router, ActivatedRoute } from '@angular/router';
import { TextService } from './../text.service';
import { Component, OnInit } from '@angular/core';
import { Text } from '../text.model';

@Component({
  selector: 'app-text-delete',
  templateUrl: './text-delete.component.html',
  styleUrls: ['./text-delete.component.css']
})
export class TextDeleteComponent implements OnInit {

  text: Text

  constructor(private textService: TextService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id')
    this.textService.readById(id).subscribe(text => {
    this.text = text
    })
  }

  deleteText(): void{
    this.textService.delete(this.text.id).subscribe(() =>{
    this.textService.showMessage('Produto excluido com sucesso!')
    })
    setTimeout(() => {
      this.router.navigate(['/texts'])
    },2500);

  }
  cancelText(): void{
    this.router.navigate(['/texts'])

  }

}
