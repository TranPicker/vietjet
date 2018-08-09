import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import { CommonModule } from '@angular/common';

// Component
import {SessionExportComponent} from './components/Home/content-right/create-new-session/session-export/session-export.component';
import {SessionImportComponent} from './components/Home/content-right/create-new-session/session-import/session-import.component';
import {SessionResultComponent} from './components/Home/content-right/create-new-session/session-result/session-result.component';
import {RevervationComponent} from './components/Home/content-right/revervation/revervation.component';
import {ListSessionComponent} from './components/Home/content-right/list-session/list-session.component';
import {PagenotfoundComponent} from './components/Home/pagenotfound/pagenotfound.component';
import {CreateNewSessionComponent} from './components/Home/content-right/create-new-session/create-new-session.component';
import {SessionDetailComponent} from './components/Home/content-right/session-detail/session-detail.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/Home/home.component';


const routerConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'list-session', pathMatch: 'full'},
      {path: 'create-revervation', component: RevervationComponent},
      {path: 'list-session', component: ListSessionComponent},
      {path: 'list-session/:id', component: SessionDetailComponent},
      {
        path: 'new-session', component: CreateNewSessionComponent,
        children: [
          {
            path: '',
            component: SessionExportComponent
          },
          {
            path: 'session-export',
            component: SessionExportComponent
          },
          {
            path: 'session-import',
            component: SessionImportComponent
          },
          {
            path: 'session-result',
            component: SessionResultComponent
          }
        ]
      },
      {path: '**', component: PagenotfoundComponent}                         // => Another loading
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
