import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', '../myApp.component.css']
})

export class HeaderComponent {
    @ViewChild("appMenu") trigger: MatMenuTrigger;
    @ViewChild("matMenu") menu: MatMenu;

    clickMenu() {
      this.trigger.openMenu();
    }
}