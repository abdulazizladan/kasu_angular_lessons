import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login( loginData: {email: string, password: string}) {
    return 'abcd.efgh.ijkl'
  }
}
