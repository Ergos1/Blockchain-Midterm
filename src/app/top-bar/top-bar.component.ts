import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  logged: boolean
  fragment = ""
  price: string
  rating: string
  categories: string
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = localStorage.getItem('userId');
    if (id){
      this.logged = true
    }else{
      this.logged = false
    }
  }
  
  logOut(){
    localStorage.removeItem('userId');
    window.location.reload()
  }
  logIn(){
    localStorage.setItem('userId', "1");
    window.location.reload()
  }
  
  home(){
    this.router.navigate(['products'])
  }
  cart(){
    this.router.navigate(['cart'])
  }
}
