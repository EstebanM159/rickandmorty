import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './personajes/lista-personajes/lista-personajes.component';
import { ListaEpisodiosComponent } from './episodes-module/lista-episodios/lista-episodios.component';
import { PersonajeDetailsComponent } from './personajes/personaje-details/personaje-details.component';
import { ListaLocacionesComponent } from './modulo-locaciones/lista-locaciones/lista-locaciones.component';
import { EpisodioDetailsComponent } from './episodes-module/episodio-details/episodio-details.component';
import { LocacionesDetailsComponent } from './modulo-locaciones/locaciones-details/locaciones-details.component';
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
  },
  {
    path: 'personaje-details/:id',
    component: PersonajeDetailsComponent
  },
  {
    path: 'lista-locaciones',
    component: ListaLocacionesComponent
  },
  {
    path: 'episodio-details/:id',
    component:EpisodioDetailsComponent
  },
  {path:'locaciones-details/:id',
  component:LocacionesDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
