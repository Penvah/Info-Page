import { Component, OnInit } from '@angular/core';
import { KeyProviderService } from '../key-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list
 
  onProfile(){this.router.navigateByUrl("Menu")}


  constructor(private keyprovider:KeyProviderService, private router: Router) {


    this.keyprovider.getNews().subscribe((data)=>{
this.list=data
console.log(data)
    })
 
}
  ngOnInit() {
  }
  

  }


