import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import { CommonModule } from '@angular/common';

// Component
import {SessionExportComponent} from './components/content-right/create-new-session/session-export/session-export.component';
import {SessionImportComponent} from './components/content-right/create-new-session/session-import/session-import.component';
import {SessionResultComponent} from './components/content-right/create-new-session/session-result/session-result.component';
import {RevervationComponent} from './components/content-right/revervation/revervation.component';
import {ListSessionComponent} from './components/content-right/list-session/list-session.component';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {CreateNewSessionComponent} from './components/content-right/create-new-session/create-new-session.component';
import { SessionDetailComponent } from './components/content-right/session-detail/session-detail.component';


const routerConfig: Routes = [
  {path: '', redirectTo: 'list-session', pathMatch: 'full'},            // => Default loading page
  {path: 'create-revervation', component: RevervationComponent},
  {path: 'list-session', component: ListSessionComponent},
  {path: 'list-session/:id', component: SessionDetailComponent},
  {path: 'new-session', component: CreateNewSessionComponent,
    children: [                          // child components declared here
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
