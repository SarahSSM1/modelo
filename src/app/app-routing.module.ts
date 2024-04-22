import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'curso'},
  { path: 'curso', loadChildren: () => import('./components/curso/curso.module').then(m => m.CursoModule)},
  { path: 'tabela', loadChildren: () => import('./components/tabela/tabela.module').then(m => m.TabelaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
