import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  standalone: true,
  selector: 'whatsapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, SideNavComponent, ChatComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
