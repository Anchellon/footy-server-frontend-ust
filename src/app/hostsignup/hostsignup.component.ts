import { Component, OnInit } from '@angular/core';
import { Arena } from 'src/app/arena-view/arena' 
import { NgForm } from '@angular/forms';
import { ArenaPostService } from './arena-post.service'

@Component({
  selector: 'app-hostsignup',
  templateUrl: './hostsignup.component.html',
  styleUrls: ['./hostsignup.component.css']
})
export class HostsignupComponent implements OnInit {
  
  Originalarena: Arena = {
    uuid: 'A03',
    arena_name: "Joga",
    manager_id: 2,
    arena_address:"kadavanthara"
  }
  arena:Arena = {
    ...this.Originalarena
  }

  
  constructor(private arena_post_service: ArenaPostService ) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    console.log('hi')
    console.log(myForm.valid)
    if(myForm.valid){
      console.log('form is valid')
      this.arena_post_service.postArenaForm(this.arena).subscribe(
        result => console.log("success", result),
        error => console.log("error",error)
      )
    }
  }
  canDeactivate():boolean{
    if(this.arena.arena_address!= "" || this.arena.arena_name != "" || this.arena.manager_id != null || this.arena.uuid != ""){
      
      console.log("input present")
      return false
    }else{
      console.log("input absent")
      return true
    }
    
  }

}  


