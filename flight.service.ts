import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  //public baseUrl:string="https://8080-edfcfbfde320562340abfabbbafcaffedecbcftwo.premiumproject.examly.io/api/flights"
  getFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseUrl)
  }
  getFlightById(flightId:number):Observable<Flight>{
    return this.http.get<Flight>(this.baseUrl+"/"+flightId)
  }
  addFlight(flight:Flight):Observable<Flight>{
    return this.http.post<Flight>(this.baseUrl,flight)
  }
  updateFlight(flight):Observable<Flight>{
    return this.http.put<Flight>(this.baseUrl+"/"+flight.flightId,flight)
  }
  deleteFlight(flightId:number):Observable<void>{
    console.log(flightId);
    
    return this.http.delete<void>(this.baseUrl+"/"+flightId)
  }
  constructor(private http:HttpClient) { }
}
