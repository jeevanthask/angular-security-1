import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  Url = "http://localhost:3000";

  constructor(private http: HttpClient, private _router: Router) {
  }

  getEvents() {
    return this.http.get(`${this.Url}/api/events`)
  }

  getSpecialEvents() {
    return this.http.get(`${this.Url}/api/special`)
  }


}
