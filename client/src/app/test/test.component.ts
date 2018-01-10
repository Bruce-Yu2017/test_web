import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;

      if (this.user !== null) {
        this._service.social_login(this.user, (res) => {

          console.log(this.user);
          localStorage.social_user = JSON.stringify(user)
          if(this.user !== null) {
            this._service.check_user(this.user, (res) => {
              if(res == "exist") {
                console.log("success social login");
              }
              else {

                console.log(res);
                this._router.navigate(["/update"]);
              }
            })
          }

          this._service.social_user = user;
          this.loggedIn = (user != null);
        });

      }
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    
    
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
