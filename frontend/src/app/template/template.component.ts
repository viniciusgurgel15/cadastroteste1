import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router, Event, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {

  public isMobile: boolean;
  public openSidebar: boolean;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && this.isMobile) { this.toogle; }
    });
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 780px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
        this.openSidebar = this.isMobile ? false : true;
      });

  }

  get toogle() {
    return this.openSidebar = !this.openSidebar;
  }

  teste() {
    console.log('teste');
  }

}
