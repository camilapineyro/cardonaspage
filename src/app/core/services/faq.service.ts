import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  obtenerFaqs(): PreguntaFrecuente[] {
    return this.faqs;
   }
   faqs: PreguntaFrecuente[] = [
     { pregunta: 'Donde, cuando, como y porque📍', respuesta: 'Lugar a confirmar, fecha tentativa: 22 de diciembre de 2023 a la noche (se confirmará en el grupo “cardonas pibardas ooooobvio”), motivo de la reunión: cierre de año.'},
     { pregunta: 'Requerimentos para la noche📋', respuesta: `
     🔞Ser mayores de 18 años (Camila no puede venir con ninguno de sus novios lamentablemente)
     👗Vestimenta de gala 
     💚Pañuelo del aborto legal, seguro y gratuito
     🧡Pañuelo separación iglesia-estado
     💜Pañuelo contra la violencia de género
     🩷Pañuelo NO maltrato a los animales
     🏳️‍🌈Bandera LGBT
     🏳️‍⚧️Bandera orgullo trans
     🙅🏽‍♀️🦁Tu cartel en contra del presidente electro🙄
     Y sobre todo… 🕺🏽GANAS DE PASARLA BIEN!
     `
    },
    { pregunta: '¿Que va a haber?😋', respuesta: '🍕Food trucks 🍻Barra libre ♉️Toro mecánico 👨‍❤️‍👨BRESH en vivo🍌Preservativos del gobierno🍆Dildos 👅Y muchas cosas más!🤤💦'}
    ,
 
   ];
 
   constructor() { }
 }
 export interface PreguntaFrecuente{
   pregunta: string;
   respuesta: string;
 
}
