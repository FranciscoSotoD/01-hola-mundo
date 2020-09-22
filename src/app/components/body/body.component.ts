import { Component } from '@angular/core';

@Component( { 
    selector: 'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent {

    mostrarOcultarAutor = true;
    mostrarOcultarArreglo = true;

    frase: any = {
        mensaje: "Un gran poder requiere una gran responsabilidad.",
        autor: "Ben Parker"
    };

    personajesArr: string[] = ['Gohan', 'Broly', 'Goku'];

}