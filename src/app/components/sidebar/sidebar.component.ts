import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/about",
    title: "About Me",
    rtlTitle: "About Me",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/workEx",
    title: "Work Experience",
    rtlTitle: "Work Experience",
    icon: "icon-badge",
    class: ""
  },

  {
    path: "/skills",
    title: "Skills",
    rtlTitle: "Skills",
    icon: "icon-shape-star",
    class: ""
  },
  {
    path: "/education",
    title: "Education",
    rtlTitle: "Education",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/projects",
    title: "Projects",
    rtlTitle: "Projects",
    icon: "icon-laptop",
    class: ""
  },
  {
    path: "/contact",
    title: "Contact Me",
    rtlTitle: "Contact Me",
    icon: "icon-square-pin",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
