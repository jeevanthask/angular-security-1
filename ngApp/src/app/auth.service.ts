import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url = "http://localhost:3000";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient, private _router: Router) {
  }

  registerUser(email, password) {

    const user = {
      email: email,
      password: password
    }

    return this.http.post(`${this.Url}/api/register`, user)
  }

  loginUser(user) {
    return this.http.post(`${this.Url}/api/login`, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

}
