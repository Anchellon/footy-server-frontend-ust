import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PitchService } from './pitch.service'
import { Pitch } from './pitch';

@Component({
  selector: 'app-single-arena-view',
  templateUrl: './single-arena-view.component.html',
  styleUrls: ['./single-arena-view.component.css']
})
export class SingleArenaViewComponent implements OnInit {
  pgid:string
  pitchs:Array<Pitch>
  errMessage: string
  private _pitchService: PitchService
  href: string;
  constructor(private router: Router,pitchService:PitchService) {
    this._pitchService = pitchService
    
  }
  
  ngOnInit() {
    
    this.href = this.router.url;
    this.pgid = this.href.split('/')[2]
    console.log(this.href)
    this._pitchService.getPitchs(this.pgid).subscribe({
      next:pitch=> {
        this.pitchs = pitch;
        // this.filteredProducts = this.products;
      },
      error: err => this.errMessage = err
    });
  }
}
