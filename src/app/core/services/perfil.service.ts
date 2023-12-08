import { NgModel } from "@angular/forms";
import { Perfil } from "../interfaces/perfil";
import { Injectable, WritableSignal, booleanAttribute, inject, numberAttribute, forwardRef } from "@angular/core";
import { Tab1Page } from "src/app/tab1/tab1.page";
import { Persona } from "../interfaces/persona";


@Injectable ({
    providedIn: `root`
})


export class PerfilService{

    personasNominadas: Persona[] = [
        { id: 1, nombre: 'Bonel Martina', seleccionada: false },
        { id: 2, nombre: 'Dubois Lourdes', seleccionada: false },
        { id: 3, nombre: 'Esnaola Lourdes', seleccionada: false },
        { id: 4, nombre: 'Ferraris Delfina', seleccionada: false },
        { id: 5, nombre: 'Gazzianiga Lucía', seleccionada: false },
        { id: 6, nombre: 'Gonzales Sofía', seleccionada: false },
        { id: 7, nombre: 'Muhall Bernardita', seleccionada: false },
        { id: 8, nombre: 'Oberti Juanita', seleccionada: false },
        { id: 9, nombre: 'Piñeyro Camila', seleccionada: false },
        { id: 10, nombre: 'Salva Mía', seleccionada: false },
        { id: 11, nombre: 'Vigna Catalina', seleccionada: false },
        { id: 12, nombre: 'Zamarini Victoria', seleccionada: false },
        // ... Agrega más personas aquí
      ];
      getPersonasNominadasSeleccionadas(): Persona[] {
        return this.personasNominadas.filter((persona) => persona.seleccionada);
      }

    constructor() {
       
    }

    perfil:Perfil = {
        nombre: "",
        persona: "",
    
    }
   
  }


     


