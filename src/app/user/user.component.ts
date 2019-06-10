import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private appService:AppService) { }

  userName:string;
  userData:any;
  repos:any;
  search:boolean=false;

  ngOnInit() {
  }

  searchGithub(){
    this.search = true;
    this.appService.getProfile(this.userName).subscribe(res=>{
      this.userData=res;
      this.appService.getRepos(this.userData.repos_url).subscribe(res=>{
        this.repos=res
        console.log(this.repos);
      });
      this.search=false;
    })
    
  }

}
