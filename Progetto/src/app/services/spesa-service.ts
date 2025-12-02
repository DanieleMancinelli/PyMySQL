import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SpesaService {
  private x ='https://orange-eureka-g4xv64xp5v4pfvv76-5000.app.github.dev/spesa';

  constructor(private http: HttpClient) {}

  getLista() {
    return this.http.get(this.x);
  }

  aggiungiElemento(elemento: string) {
    return this.http.post(this.x, { elemento });
  }
}


