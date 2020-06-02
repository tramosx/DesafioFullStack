import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppService {

  private apiRoot = 'http://localhost:8000/';
  isLoggedIn = false;
  token:any;
  variavel:any;

  constructor(
    private http: HttpClient,
  ) { }


  getReunioesById(id: String) {
    return this.http.get(this.apiRoot.concat('reunioes/'+id+'/'));
  }


  login(username: String, password: String) {
    console.log("login");
    return this.http.post(this.apiRoot.concat('rest-auth/login/'),
      {username: username, password: password}
    );
  }
}