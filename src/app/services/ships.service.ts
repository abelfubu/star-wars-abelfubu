import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  cache = {};

  constructor(private http: HttpClient) {}

  getAll(url?: string): Observable<ServerResponse> {
    if (this.cache[url]) return of(this.cache[url]);

    if (!url && this.cache[this.URL]) return of(this.cache[this.URL]);

    if (!url)
      return this.http.get<ServerResponse>(this.URL).pipe(
        tap((resolvedValue) => {
          this.cache[this.URL] = resolvedValue;
        })
      );

    return this.http.get<ServerResponse>(url).pipe(
      tap((resolvedValue) => {
        this.cache[url] = resolvedValue;
      })
    );
  }

  getOne(id: string): Observable<Ship> {
    if (this.cache[id]) {
      return of(this.cache[id]);
    }

    return this.http.get<Ship>(this.URL + id).pipe(
      tap((resolvedValue) => {
        this.cache[id] = resolvedValue;
      })
    );
  }

  setClearCacheInterval(seconds: number): void {
    setInterval(() => {
      this.cache = {};
    }, seconds);
  }
}
