import { Component, forwardRef, inject } from '@angular/core';
import { PerfilService } from '../core/services/perfil.service';
import { Perfil } from '../core/interfaces/perfil';
import { Router } from '@angular/router';
import { Persona } from '../core/interfaces/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})

export class Tab2Page {
  
  handleIframeLoad() {
    // Manejar eventos de carga del iframe si es necesario
    console.log('Iframe cargado');
  }

  constructor() {}

perfilService = inject(PerfilService);

get personasNominadas(): Persona[] {
  return this.perfilService.personasNominadas;
}

nominadasInvalidas(): boolean {
  const nominadasSeleccionadas = this.perfilService.getPersonasNominadasSeleccionadas();
  return nominadasSeleccionadas.length < 1 || nominadasSeleccionadas.length > 5;
}

}

//el ngmodel es un two way banding porque tiene dos sentidos: escribimos en html y se modifica el ts y al reves