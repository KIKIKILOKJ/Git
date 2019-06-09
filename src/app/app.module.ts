import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RoutingModule } from './routing/routing.module'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    GitFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
