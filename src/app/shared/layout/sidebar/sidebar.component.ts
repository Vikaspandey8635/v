import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  VERSION,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() urlOutput = new EventEmitter<any>();

  panelOpenState = false;
  version = VERSION;
  sidenavWidth = 15;
  ngStyle!: string;

  sideBar: Array<any> = [
    {
      text: 'Dashboard',
      path: '',
      icon: 'dashboard',
      isSubMenu: false,
    },
    {
      text: 'Manage User',
      path: '/user/userList',
      icon: 'supervisor_account',
      isSubMenu: false,
    },
    {
      text: 'Manage Shops',
      path: '/manageShop',
      icon: 'shopping_cart',
      isSubMenu: false,
    },
    {
      text: 'Manage Game Play/Environment',
      path: '/Gameplay',
      icon: 'keyboard_hide',
      isSubMenu: false,
    },
    // {
    //   text: 'Manage Category',
    //   path: '',
    //   icon: ' menu',
    //   children: [
    //     {
    //       text: 'Im visible because I am open',
    //       path: '',
    //       icon: 'settings'
    //     }
    //   ]
    // },
    {
      text: 'Manage Levels',
      path: '/level',
      icon: 'notifications_active',
      isSubMenu: false,
    },
    {
      text: 'Manage Assets',
      path: '/manageAssets',
      icon: 'videogame_asset',
      isSubMenu: false,
    },

    {
      text: 'Manage Leaderboard',
      path: '/leaderboard',
      icon: 'equalizer',
      isSubMenu: false,
    },
    {
      text: 'Manage Referrals',
      path: '/referrals',
      icon: 'supervisor_account',
      isSubMenu: false,
    },
    {
      text: 'Manage Dance Parties',
      path: '/sub-admin',
      icon: 'speaker',
      isSubMenu: false,
    },
    {
      text: 'Manage payments',
      path: '/Payment',
      icon: 'payment',
      isSubMenu: false,
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'graphic_eq',
      isSubMenu: false,
    },
    {
      text: 'Customer Support',
      path: '/support',
      icon: 'perm_phone_msg',
      isSubMenu: false,
    },
    {
      text: 'Manage CMS',
      path: '/cms',
      icon: 'security',
      isSubMenu: false,
    },
    // {
    //   text: 'Manage CMS',
    //   path: '/manage-cms/cms',
    //   icon: 'texture',
    //   isSubMenu: true,
    //   subMenuItems: [
    //     {
    //       text: 'Contact Support',
    //       path: '/manage-cms/cms',
    //       icon: 'support_agent',
    //       isSubMenu: false,
    //     },
    //     {
    //       text: 'Terms and conditions',
    //       path: '/manage-cms/cms',
    //       icon: 'support_agent',
    //       isSubMenu: false,
    //     },
    //     {
    //       text: 'Privacy Policy',
    //       path: '/manage-cms/cms',
    //       icon: 'supervisor_account',
    //       isSubMenu: false,
    //     },
    //     {
    //       text: "FAQ'S",
    //       path: '',
    //       icon: 'supervisor_account',
    //       isSubMenu: false,
    //     },
    //   ],
    // },
    {
      text: 'Notification Management',
      path: '/notification',
      icon: 'notifications_active',
      isSubMenu: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }
}
