import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  certificates: any = [
    {
      name: 'Completion Certificate',
      status: 'Active',
      Fields:[
        {
          name:"First name1",
          Description:"Description1"
        },
        {
          name:"lable name2",
          Description:"Description2"
        },
        {
          name:"lable name3",
          Description:"Description3"
        }
      ]
    },
    {
      name: 'Participation Certificate',
      status: 'Active',
      Fields:[
        {
          name:"lable name1",
          Description:"Description1"
        },
        {
          name:"lable name2",
          Description:"Description2"
        }

       ]
    },
    {
      name: 'Training Certificate',
      status: 'Active',
      Fields:[ ]
    },
    {
      name: 'Aramco Learning Program Certificate',
      status: 'Active',
      Fields:[ ]
    },
  ];
  constructor(private httpclient: HttpClient) { }

  certificate(url:any): Observable<any>
  {
    return this.httpclient.get(url);
  }

}
