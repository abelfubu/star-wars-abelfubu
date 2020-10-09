import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(url?: string): Observable<any> {
    if (!url) return this.http.get<any>(this.URL);
    return this.http.get<any>(url);
  }
}
