import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor(private position:Location, private route:ActivatedRoute, private router:Router, private appService:AppService) { }

  repoName:string;
  repoInfo:any;

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.repoName = params.get('name');
      return(this.repoName)
    })
    this.appService.getRepo(this.repoName).subscribe(res=>{
      this.repoInfo = res;
      return(res)
    })
  }
  back(){
    this.position.back();
  }

}
