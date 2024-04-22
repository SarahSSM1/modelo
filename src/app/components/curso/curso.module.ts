import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutes } from './curso.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoComponent } from './curso.component';


@NgModule({
  declarations: [CursoComponent],
  imports: [
    CommonModule,
    CursoRoutes,
    ReactiveFormsModule
  ]
})
export class CursoModule { }
