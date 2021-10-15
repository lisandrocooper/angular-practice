import { Component, OnInit } from '@angular/core';
import { OPTIONS } from './header-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  options = OPTIONS;

  constructor() { }

  ngOnInit(): void {
    
  }

}
