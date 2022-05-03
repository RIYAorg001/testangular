import { Component, OnInit } from '@angular/core';

import {Test} from '../test';

//import {TESTES} from '../mock-testes';



import{ TestService } from '../test.service';

import { MessageService } from '../message.service';



@Component({

  selector: 'app-testes',

  templateUrl: './testes.component.html',

  styleUrls: ['./testes.component.css']

})

export class TestesComponent implements OnInit {

 // testes=TESTES;

  selectedTest?:Test;

  testes: Test[] =[];

  constructor(private testService: TestService,private messageService:MessageService) { }



  ngOnInit(): void {

    this.getTestes();

  }

  onSelect(test:Test):void{

    this.selectedTest=test;

    this.messageService.add('TestesComponent: Selected test id=${test.id}');

   // this.messageService.add('TestesComponent: Selected test1 id =${test1.id}');

  }

  getTestes():void{

    //this.testes=this.test1Service.getTestes();

    this.testService.getTestes().subscribe(testes => this.testes=testes);

  }

}
