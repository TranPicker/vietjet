import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './/app-routing.module';
// service
import {MessageService} from './service/message/message.service';
import {ListsessionService} from './service/listsession/listsession.service';
import {SessionDetailService} from './service/sessiondetail/session-detail.service';
// Component
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {NavbarLeftComponent} from './components/navbar-left/navbar-left.component';
import {ContentRightComponent} from './components/content-right/content-right.component';
import {FooterComponent} from './components/footer/footer.component';
import {SessionExportComponent} from './components/content-right/create-new-session/session-export/session-export.component';
import {SessionImportComponent} from './components/content-right/create-new-session/session-import/session-import.component';
import {SessionResultComponent} from './components/content-right/create-new-session/session-result/session-result.component';
import {RevervationComponent} from './components/content-right/revervation/revervation.component';
import {ListSessionComponent} from './components/content-right/list-session/list-session.component';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {BreadCrumbNewSessionComponent} from './components/content-right/bread-crumb-new-session/bread-crumb-new-session.component';
import {CreateNewSessionComponent} from './components/content-right/create-new-session/create-new-session.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SessionDetailComponent } from './components/content-right/session-detail/session-detail.component';
// import pipes
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortNumberPipe } from './pipes/sort/sort-number.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    HeaderComponent,
    NavbarLeftComponent,
    ContentRightComponent,
    FooterComponent,
    SessionExportComponent,
    SessionImportComponent,
    SessionResultComponent,
    RevervationComponent,
    ListSessionComponent,
    PagenotfoundComponent,
    BreadCrumbNewSessionComponent,
    CreateNewSessionComponent,
    MessagesComponent,
    SessionDetailComponent,
    FilterPipe,
    SortNumberPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [MessageService, ListsessionService, SessionDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
