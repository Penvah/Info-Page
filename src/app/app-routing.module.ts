import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyProviderService } from './key-provider.service';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
  }
  



