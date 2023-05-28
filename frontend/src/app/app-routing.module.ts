import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberCreateComponent } from './components/member-create/member-create.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberConfirmComponent } from './components/member-confirm/member-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { FamilyCreateComponent } from './components/family-create/family-create.component';
import { FamilyListComponent } from './components/family-list/family-list.component';
import { FamilyEditComponent } from './components/family-edit/family-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VotersListFullComponent } from './components/voters-list-full/voters-list-full.component';
import { MemberListComponent } from './components/members-list/member-list.component';
import { MemberCollectionComponent } from './components/member-collection/member-collection.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-member' },
  { path: 'create-member', component: MemberCreateComponent },
  { path: 'members-list', component: MemberListComponent },
  { path: 'edit-member/:id', component: MemberEditComponent },
  { path: 'confirm-member', component: MemberConfirmComponent },
  { path: 'list-member', component: MemberListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-family', component: FamilyCreateComponent },
  { path: 'edit-family/:id', component: FamilyEditComponent },
  { path: 'familys-list', component: FamilyListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'voters-list-full', component: VotersListFullComponent },
  { path: 'member-collection', component: MemberCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
