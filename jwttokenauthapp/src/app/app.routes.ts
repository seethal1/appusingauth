import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'products', component:ProductsComponent},
    {path:'cart', component:CartComponent},
    {path:'orders', component:OrdersComponent},
];
