import { Component, OnInit, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
formBuilder = inject(NonNullableFormBuilder);
service = inject(CursoService);

  form = this.formBuilder.group({
    nome:['', Validators.required],
    email:['', Validators.required],
    telefone:['', Validators.required],
    cursos: ['', Validators.required]
  })


  enviarRequest(){
    if(this.form.valid){
      this.service.submitForm(this.form).subscribe({
        next: () => {
          this.form.reset();
        }
      });
    } else {
      return;
    }
  }

  onSubmit(){
    const verificarForm = this.form.value;

    this.enviarRequest();
    if(this.form.valid ){
      console.log('formulario válido :D', verificarForm);
    } else {
      console.log('formulario inválido :(', verificarForm);
    }
  }



}
