import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Labortoria Memes';
  memes = [
    {
      title: "6 sentido JS",
      image: "https://statics.memondo.com/p/99/ccs/2016/05/CC_2581711_3279a685ee0247abb69433addae1a7b1_meme_otros_solo_programadores_xd.jpg?cb=6607706",
      description: "Cuando no declaras tus variables"
    },
    {
      title: "Borrachera de codigo",
      image: "https://4.bp.blogspot.com/-25kufFKVqWg/Vxet39_4TkI/AAAAAAAAAvc/OzdiQYqKRCAtEYaOCPq1xuriD90SRKZ4ACLcB/s640/12524173_1084250148303422_7360188813809398316_n.jpg",
      description: "cuando te contratan sabiendo"
    }
  ];
  onNewMeme(meme){
    this.memes.push(meme);
  }
}
// componente principal - este es el controlador
// import y export para importar y expotar componentes
// @component es un decorador, nos dice dTOS ( METADATOS) nos informa el selector, template URL es la direccion del html de este coponenete, este html es la vista, es html casi puro, styleURLS es un arreglo con todos los archvos css que quieran del componente, estos css se aplicaran solo y solo al coponenete, export class, exporta una clase(appComponent), esamos escribiendo codigo genreal, los componentes tienes clases y las damos caracteristicas a estas clases y la expotamos,
//error de ejecucion: el error sale al cliente
// error de compilacion: error al programador