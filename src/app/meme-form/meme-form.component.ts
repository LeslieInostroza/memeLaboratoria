import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.css']
})
export class MemeFormComponent implements OnInit {
  @Output() onMeme:EventEmitter<any> = new EventEmitter<any>();//en ouput se colocan funciones
  memeForm: FormGroup; // podemos agrupar con formgroup

  constructor(private formBuilder:FormBuilder) { 
    this.createMemeForm();
  }

  ngOnInit() {
  }
  createMemeForm(){
    this.memeForm = this.formBuilder.group({ // si quiero un solo campo es .control
      title : ['', Validators.required],
      image : ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  addMeme(/*title:string, image: string, description: string*/){
    this.onMeme.emit({ // emitir el evento, se genera un evento
      title: this.memeForm.value.title,
      image: this.memeForm.value.image,
      description: this.memeForm.value.description
    });
  }
}
