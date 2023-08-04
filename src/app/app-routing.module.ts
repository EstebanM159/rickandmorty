import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './personajes/lista-personajes/lista-personajes.component';
import { ListaEpisodiosComponent } from './episodes-module/lista-episodios/lista-episodios.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'lista-personajes',
    pathMatch:'full'
  },
  {
    path:'lista-personajes',
    component:ListaPersonajesComponent
  },
  {
    path: 'lista-episodios',
    component:ListaEpisodiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
