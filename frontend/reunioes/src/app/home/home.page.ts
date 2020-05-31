import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  error: any;
  id_user: any;
  datas: any;

  constructor(private api: AppService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_user = JSON.parse(params["currency"]);
      console.log("atual")
      console.log(this.id_user);
    });

    this.api.getReunioesById(this.id_user).subscribe(
      data => {
        console.log("dentro de api home.page");
        console.log(data);
        this.datas = data;
      },
      error => {
        console.log(error);
      },
    );

  }
}
