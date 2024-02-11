import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:FrameworkComponent, title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  {path:'portfolio', component:PortfolioComponent, title:'Portfolio'},
  {path:'contact', component:ContactComponent, title:'Contact'},
  {path:'**',component:NotfoundComponent, title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
