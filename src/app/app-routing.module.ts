import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';


const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'explore',
    component:ExploreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
