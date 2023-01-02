import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(protected http: HttpClient) {

   }

  registerUser(data:any): Observable<any> {
    console.log(data)
    return this.http.post<any>(environment.SERVER + "register", data)

  }
}
