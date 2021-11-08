import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

 
@Injectable({
    providedIn: 'root'
}

)
export class ChampionsService {
baseUrl = environment.baseUrl;
ChampsUrl = environment.ChampsUrl;
constructor(private http: HttpClient) { }

getChampions(){
    return this.http.get<any>(`${this.baseUrl}`);
}

getChampion(name){
    return this.http.get<any>(`${this.ChampsUrl}/${name}.json`);
}
}
