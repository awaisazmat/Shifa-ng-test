import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){}
saveToken(token:any){
  localStorage.setItem('token', token)
}


}
