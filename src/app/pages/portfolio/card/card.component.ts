import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router){
    //recupera o parametro = http://localhost:4200/content/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    //recupera o parametro do primeiro filho (o ? serve para tratar a possibilidade dele não existir) = http://localhost:4200/content/{1}
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )
    //recupera os queryparams = http://localhost:4200/content/1?{name=Gabriel&token=1234}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
    //setInterval(()=>{this.navegador.navigate(['/'])}, 5000)
  }


}
