import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Payload } from '../shared/payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
https = inject(HttpClient)

  constructor() { }

    submitForm(formData: FormGroup): Observable<Payload> {
      const payload = {
        nome: formData.get('nome')?.value,
        email: formData.get('email')?.value,
        telefone: formData.get('telefone')?.value,
        cursos: formData.get('cursos')?.value
      };

      // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',payload);

      return this.https.post<Payload>('https://httpbin.org/post', payload)
    }

}
