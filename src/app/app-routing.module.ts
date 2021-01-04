import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dang-nhap', component: LogInComponent},
  {path: 'dang-ky', component: SignUpComponent},
  {path: 'sach/:bookSlug', component: BookComponent},
  {path: 'gio-hang', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
