import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartComponent } from './cart/cart.component';
import { MenupageComponent } from './menupage/menupage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MenupageComponent },
  // { path: 'homePage', component: HomepageComponent },
  { path: 'menuPage', component: MenupageComponent },
  { path: 'cartPage', component: CartComponent },
  { path: 'adminPage', component: AdminPageComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: 'MenupageComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [AuthGuard, AuthGuardLogggedIn]
})
export class AppRoutingModule { }
