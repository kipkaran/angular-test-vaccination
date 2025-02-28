import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'forms',component:FormsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
