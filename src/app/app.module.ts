import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { TestesComponent } from './testes/testes.component';

import { FormsModule } from '@angular/forms';

import { TestDetailComponent } from './test-detail/test-detail.component';

import { MessageComponent } from './message/message.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({

  declarations: [

    AppComponent,

    TestesComponent,

    TestDetailComponent,

    MessageComponent,

    DashboardComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,

    AppRoutingModule,


  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }