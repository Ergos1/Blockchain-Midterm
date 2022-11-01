import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [
  {path: '', component:MainComponent, children:[
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path : 'products', component: ProductFilterComponent},
    {path : 'cart', component: CartComponent},
    {path : 'products/:price/:rating/:categories/:search', component: ProductFilterComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
