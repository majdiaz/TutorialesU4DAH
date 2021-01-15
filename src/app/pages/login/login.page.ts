import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AlertController } from "@ionic/angular";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(private router: Router, private authSvc:AuthService, private alertCtrl:AlertController,
              private authService: AuthService) { }

  ngOnInit() {
    
  }
  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log('succesfuly logged user');
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      const alert = await this.alertCtrl.create({
        header: "datos incorrectos",
        message: "los datos son incorrectos",
        buttons:[
          {
            text: "salir",
          }
        ]
      });
    }
  }

/*  onLoginGoogle(): void {

    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err',err.message));
  }
*/
  onLoginRedirect(): void{
    this.router.navigate(['/tabs/tab1']);
  }
}
