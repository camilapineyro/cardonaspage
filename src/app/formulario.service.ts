import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PerfilService } from './perfil.service';
import { Persona } from '../interfaces/persona';
 // Ajusta la ruta según tu estructura de archivos

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private readonly FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfCOJHyG0AIsBMGPyIXdM_o6HFVHH1U0kXC6JZFMD08MOR9xw/formResponse';

  constructor(private http: HttpClient, private perfilService: PerfilService) {}

  enviarRespuestasALaEncuesta(terna: string, personasNominadas: Persona[]): void {
    const respuestas = this.construirRespuestas(terna, personasNominadas);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post(this.FORM_URL, respuestas, { headers, responseType: 'text' })
      .subscribe(
        (data) => {
          console.log('Respuestas enviadas con éxito:', data);
        },
        (error) => {
          console.error('Error al enviar respuestas:', error);
        }
      );
  }

  private construirRespuestas(terna: string, personasNominadas: Persona[]): string {
    const nombre = 'entry.1234567890'; // Reemplaza con el nombre real del campo en tu formulario
    const nominadas = 'entry.0987654321'; // Reemplaza con el nombre real del campo en tu formulario

    const respuestas = [
      `${nombre}=${encodeURIComponent(terna)}`,
      `${nominadas}=${encodeURIComponent(personasNominadas.map((p) => p.nombre).join(', '))}`,
    ];

    return respuestas.join('&');
  }
}

