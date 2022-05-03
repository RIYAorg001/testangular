import { Component, OnInit } from '@angular/core';

import { Test } from '../test';

import { TestService } from '../test.service';



@Component({

  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {

  testes : Test[] =[];

  constructor(private testService:TestService) { }



  ngOnInit(): void {

    this.getTestes();

  }

  getTestes():void{

    this.testService.getTestes().subscribe(testes => this.testes=testes.slice(0,8));

  }

}


