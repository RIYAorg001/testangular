import { Injectable } from '@angular/core';

import {Test} from './test';

import { TESTES } from './mock-testes';



import { Observable , of} from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({

  providedIn: 'root'

})

export class TestService {

  getTestes():Observable<Test[]>{

    const testes =of(TESTES);

    this.messageService.add('HeroService: fetched testes')

    return testes;

  }

  getTest(id: Number): Observable<Test>{

    const test = TESTES.find(h=> h.id ===id)!;

    this.messageService.add('TestService: fetched test id=${id}');

    return of(test);

  }

  constructor(private messageService:MessageService) { }

}