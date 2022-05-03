import { NgModule } from '@angular/core';

//import { CommonModule } from '@angular/common';

import { TestesComponent } from '../testes/testes.component';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';

import { TestDetailComponent } from '../test-detail/test-detail.component';

const routes:Routes=[

  {path : 'testes',component : TestesComponent},

  {path : 'dashboard',component:DashboardComponent},

  {path : '' , redirectTo: '/dashboard',pathMatch:'full'},

  {path : 'detail/:id',component:TestDetailComponent}

];



@NgModule({

  declarations: [],

  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]

 

})

export class AppRoutingModule { }
