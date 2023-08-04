import { Component, OnInit } from '@angular/core';
import { SidenavChatsComponent } from './sidenav-chats/sidenav-chats.component';
import { SidenavHeaderComponent } from './sidenav-header/sidenav-header.component';
import { SidenavSearchComponent } from './sidenav-search/sidenav-search.component';

@Component({
  standalone: true,
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  imports: [
    SidenavHeaderComponent,
    SidenavSearchComponent,
    SidenavChatsComponent,
  ],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
