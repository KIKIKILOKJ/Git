import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { RepoComponent } from '../repo/repo.component';

const routes: Routes=[
  {
    path:'',
    component: UserComponent
  },

  {
    path:'repo/:name',
    component:RepoComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
