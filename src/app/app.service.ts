import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getProfile(name:string){
    return this.http.get(environment.apiUrl+name+"?access_token="+environment.apikey);
  }

  getRepos(_url: any){
    return this.http.get( _url );
  }

  getRepo(name){
    return this.http.get("https://api.github.com/repos/"+name);
  }
}
