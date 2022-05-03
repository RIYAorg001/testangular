import { Injectable } from '@angular/core';



import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Test } from './test';

import { TestesComponent } from './testes/testes.component';




@Injectable({

  providedIn: 'root'

})

export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const testes =[

      {id:21,name:'Riya'},

      {id:22,name:'Taniya'},

      {id:23,name:'Anup'},

      {id:24,name:'sruthi'},

      {id:25,name:'rihu'},

      {id:26,name:'simpi'},

      {id:27,name:'farida'},

      {id:28,name:'ruma'}

    ];

    return {testes};

  }




  constructor() { }

}
