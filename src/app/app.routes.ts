import { Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { OmComponent } from './om/om.component';
import { TsrComponent } from './tsr/tsr.component';
import { BqmComponent } from './bqm/bqm.component';


export const routes: Routes = [
{ path:'tsr', component:TsrComponent },
   { path:'om', component:OmComponent },
   { path:'leads', component: LeadsComponent},
   { path:'bqm', component: BqmComponent},
   {path: '', redirectTo: '/tsr', pathMatch: 'full' },
    {path: '**', redirectTo: '/tsr'},
];
