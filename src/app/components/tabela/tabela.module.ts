import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutes } from './tabela.routing';
import { TabelaComponent } from './tabela.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    TabelaRoutes,
    ReactiveFormsModule
  ]
})
export class TabelaModule { }
