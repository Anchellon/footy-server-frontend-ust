import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private router:Router) { }

  onBookArena(){
    this.router.navigate(['/arenaslist'])
  }

  onHostVenue(){
    console.log("im here")
    this.router.navigate(['/hostsignup'])
  }

  ngOnInit(): void {
  }

}
