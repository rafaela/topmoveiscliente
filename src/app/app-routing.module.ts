import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalhe/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'meuspedidos',
    loadChildren: () => import('./my-request/my-request.module').then( m => m.MyRequestPageModule)
  },
  {
    path: 'categoria/:id',
    loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  },

  {
    path: 'subcategoria/:id',
    loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  },

  {
    path: 'vendafinalizada/:id',
    loadChildren: () => import('./purchase-completed/purchase-completed.module').then( m => m.PurchaseCompletedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
