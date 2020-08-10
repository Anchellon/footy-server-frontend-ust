import { Component, OnInit } from '@angular/core';
import { ArenaService } from './arena.service'
import { Arena } from './arena'
import { Router } from '@angular/router';


@Component({
  selector: 'app-arena-view',
  templateUrl: './arena-view.component.html',
  styleUrls: ['./arena-view.component.css']
})
export class ArenaViewComponent implements OnInit {
  private _arenaService: ArenaService
  arenas:Array<Arena>
  errMessage: string
  constructor(arenaService:ArenaService,private router:Router) { 
    this._arenaService = arenaService
  }
      

  ngOnInit(){
    this._arenaService.getArenas().subscribe({
      next:arena=> {
        this.arenas = arena;
        // this.filteredProducts = this.products;
      },
      error: err => this.errMessage = err
    });
    
  }
  onBookPitch(id:number){
    let url :string
    url = 'arena/'+ id.toString()

    console.log(url)
    this.router.navigate([url])
  }

}
