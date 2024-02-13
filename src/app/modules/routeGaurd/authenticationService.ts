import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    // logic here to check token is valid or not expire then return true else false.
    return true;

  }

}