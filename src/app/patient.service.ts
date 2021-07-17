import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  result:any;
  constructor(private http: HttpClient) { }

  getPatientList() {
    let token:any = this.getToken();
    return this.http.get('http://devjs01.shifa.com.pk:3000/patients/admitted',{headers:{authorization:token}})
    .toPromise().then(res => {
      return res;
    });
  }

  loginUser(loginForm:any){
    console.log(loginForm);
      return this.http.post('http://devjs01.shifa.com.pk:3000/api/login',loginForm)
      .toPromise().then(res => {
        return res;
      });
      
    }

    
  getToken(){
    return localStorage.getItem('token')
  }
  saveToken(token:any){
    return localStorage.setItem('token', token)
  }
}
