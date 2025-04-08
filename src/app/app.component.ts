import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { OmComponent } from './om/om.component';
import { TsrComponent } from './tsr/tsr.component';
import { BqmComponent } from './bqm/bqm.component';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeadsComponent, OmComponent, TsrComponent, BqmComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elevate_routed';
}
