import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SecondComponent } from './second/second.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("881642856104-gchuqjdr5lgvinqcvlbi1aovp23f8eq6.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("568749596799970")
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
