import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ship } from '../models';

interface ServerResponse {
  previous: string;
  next: string;
  results: Ship[];
}

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(url?: string): Observable<ServerResponse> {
    if (!url) return this.http.get<ServerResponse>(this.URL);
    return this.http.get<ServerResponse>(url);
  }

  getOne(id: string): Observable<Ship> {
    return this.http.get<Ship>(this.URL + id);
  }
}
