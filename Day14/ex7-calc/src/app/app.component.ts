import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
export class AppComponent {
  //data
  a:number = 0;
  b:number = 0;
  results: number[] = [];
  show: boolean= false;


  //methods
    setA(value:string){
        this.a= Number(value);
    }
    setB(value:string){
        this.b= Number(value);
    }

    calculator() {
        this.show = true;
        this.results = [
            this.a+this.b,
            this.a-this.b,
            this.a*this.b,
        ];

}
}
