import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit{

  id: any; 

  constructor(
    private modalController: ModalController,
    private authService: AppService,
    private navCtrl: NavController,
  ) {}


  navigationExtras: NavigationExtras = {
    queryParams: {
        currency: JSON.stringify(2),
    }
  };

  ngOnInit() {
  
  }  

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        // this.alertService.presentToast("Logged In");
        console.log("logado");
        console.log(data["key"]);
        console.log(data["user"]);
        console.log(data["user"]["id"]);
        this.id = data["user"]["id"];
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot(['home'], {
                      queryParams: {
                          currency: this.id,
                      }
                    }
        ); 
      }
    );
  }

}
