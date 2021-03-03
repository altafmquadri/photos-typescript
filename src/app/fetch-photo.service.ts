import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { environment } from '../environments/environment';

interface fetchPhotoResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FetchPhotoService {
  // API = 'https://api.unsplash.com/photos/random';
  constructor(private http: HttpClient) {}

  getPicture() {
    return this.http
      .get<fetchPhotoResponse>(environment.apiURL, {
        headers: {
          'Accept-Version': 'v1',
          Authorization: environment.apiKey,
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
