import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() title:string;//meter cosas a nuestros componentes, any = cualquier cosa, @Input=es un decorador input recibe datos
  @Input() image:string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
