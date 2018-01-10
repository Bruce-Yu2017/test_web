import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  
  {path: "", component: SecondComponent},
  {path: "test", component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
