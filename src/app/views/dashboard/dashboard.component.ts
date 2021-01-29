import { Component, HostListener, OnInit } from '@angular/core'
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private mobileBreakpoint: number = 576

  public title: string = 'Admin Application'
  public globalTheme: boolean
  public menuLinks: NbMenuItem[] = [
    { icon: 'menu', title: 'Dashboard', link: '/' },
    { icon: 'person-outline', title: 'Users', link: 'user-profile' },
    { icon: 'lock-outline', title: 'Entries', link: 'entries' },
    { icon: 'edit', title: 'Charts', link: 'charts' }
  ]

  items = [{ title: 'Profile' }, { title: 'Log out' }];

  notifications: { icon: string, title: string }[] = [
    { icon: 'person-done-outline', title: '35 new users' },
    { icon: 'edit-outline', title: 'You can edit post' },
    { icon: 'copy-outline', title: 'The repartition is ready' },
  ];

  constructor (
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService
  ) {
    this.globalTheme =
      this.themeService.currentTheme == 'default' ? false : true
  }

  ngOnInit (): void {}

  toggleTheme () {
    this.themeService.changeTheme(this.globalTheme ? 'dark' : 'default')
  }

  toggle () {
    if (window.innerWidth < this.mobileBreakpoint) {
      this.sidebarService.toggle(false, 'dashboard')
    } else {
      this.sidebarService.toggle(true, 'dashboard')
    }
  }

  toggleCompact () {
    this.sidebarService.toggle(true, 'dashboard')
  }
}
