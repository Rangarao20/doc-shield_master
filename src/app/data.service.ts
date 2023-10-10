import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
  login(url:any): Observable<any>
  {
     return this.httpclient.get(url);
  }
  certificate(url:any): Observable<any>
  {
    return this.httpclient.get(url);
  }
  signer(url:any): Observable<any>
  {
    return this.httpclient.get(url);
  }
  app(id:Number, value:any): Observable<any>
  {
    return this.httpclient.put('http://localhost:5000/docdet/statapp/'+id+'', value);
  }
  signed()
  {
    return this.httpclient.get('http://localhost:5000/docdet/signed');
  }
  addc(body:any)
  {
    return this.httpclient.post('http://localhost:5000/doctype/addc',body);
  }
  savedoc(body:any)
  {
    return this.httpclient.post('http://localhost:5000/docdet/signed',body);
  }
  isssued_doc(url: any): Observable <any>
  {
    return this.httpclient.get(url);
  }
  approved_doc(url: any): Observable <any>
  {
    return this.httpclient.get(url);
  }


}
