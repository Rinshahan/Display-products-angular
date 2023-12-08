import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainArr: any[] = []


  async ngOnInit() {
    await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json.products, "siajasd");

        this.mainArr = json.products;
      })
    console.log(this.mainArr);



  }


}
