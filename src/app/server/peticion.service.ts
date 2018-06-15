import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeticionService {

  constructor(private http: HttpClient) { }

  GetAllMovies(title:string) {
    return this.http.get(`http://backend-everis-retoeveris.a3c1.starter-us-west-1.openshiftapps.com/usuario`)
  }
  

  
} 
