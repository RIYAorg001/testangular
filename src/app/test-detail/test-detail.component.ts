import { Component, OnInit, Input } from '@angular/core';

import {Test} from '../test';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { TestService } from '../test.service';

@Component({

  selector: 'app-test-detail',

  templateUrl: './test-detail.component.html',

  styleUrls: ['./test-detail.component.css']

})

export class TestDetailComponent implements OnInit {

  @Input() test?: Test;

  constructor(

    private route: ActivatedRoute,

    private testService: TestService,

    private location: Location

  ) { }
  ngOnInit(): void {

    this.getTest();

  }

  getTest():void{

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.testService.getTest(id).subscribe(test => this.test = test);

  }

  goBack():void{

    this.location.back();

  }

}

