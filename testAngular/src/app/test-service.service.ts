import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private _httpClient: HttpClient) { }

  public getComments()
  {
   return this._httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }
}
