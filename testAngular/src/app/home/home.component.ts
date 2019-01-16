import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import {TestServiceService} from '../test-service.service'
import { resolve } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public commentList: any;
  constructor( private _testComment: TestServiceService) {
  }

  ngOnInit() {
   this._testComment.getComments().subscribe(data=>
    {
      this.commentList = data
    }); 
  }

}
