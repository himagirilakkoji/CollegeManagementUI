import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../shared/ApiPaths';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin(email: string,password:string) : Observable<any> {
    const apiUrl = ApiPaths.BasicUrl + ApiPaths.getAdmin_get +email+"/"+password;
    return this.http.get<any>(apiUrl);
  }
}
