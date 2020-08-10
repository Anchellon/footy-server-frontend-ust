import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';
import { ArenaViewComponent } from "./arena-view/arena-view.component"
import { SingleArenaViewComponent } from "./single-arena-view/single-arena-view.component";
import { HostsignupComponent } from './hostsignup/hostsignup.component';
import { FormsModule } from '@angular/forms'
import { FormGuardGuard} from './hostsignup/form-guard.guard'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JumbotronComponent,
    ArenaViewComponent,
    SingleArenaViewComponent,
    HostsignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component: JumbotronComponent},
      
      
      {path:"arenaslist", component: ArenaViewComponent},
      {path:"hostsignup",
      canDeactivate:[FormGuardGuard], 
        component:HostsignupComponent,
      },
      {path:"arena/:id", component:SingleArenaViewComponent},
      {path:"", redirectTo:'home',pathMatch:'full'},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
