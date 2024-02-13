import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route:ActivatedRoute, private router_:Router){

  }
  goRouteGaurdModule(){
     this.router_.navigateByUrl('routeGaurd/goCanActivate');
  }
  getElemetRef(_num: string){
    let elemetRef=document.getElementById(_num);
    if(elemetRef?.style.display=='none'){
       elemetRef.style.display='block';
    }else if(elemetRef?.style.display=='block'){
     elemetRef.style.display='none';
    }
  }
}
