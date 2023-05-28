import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithCredentialsRequestInterceptor } from './core/withCredentials.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberListComponent } from './components/members-list/member-list.component';
import { MemberConfirmComponent } from './components/member-confirm/member-confirm.component';
import { FamilyCreateComponent } from './components/family-create/family-create.component';
import { FamilyEditComponent } from './components/family-edit/family-edit.component';
import { FamilyListComponent } from './components/family-list/family-list.component';
import { VotersListFullComponent } from './components/voters-list-full/voters-list-full.component';
import { MemberCollectionComponent } from './components/member-collection/member-collection.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    LoginComponent,
    DashboardComponent,
    MemberCreateComponent,
    MemberEditComponent,
    MemberConfirmComponent,
    MemberListComponent,
    FamilyCreateComponent,
    FamilyEditComponent,
    FamilyListComponent,
    VotersListFullComponent,
    MemberCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: WithCredentialsRequestInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
