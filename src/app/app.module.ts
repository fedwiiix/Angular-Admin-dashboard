import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { NbThemeModule } from '@nebular/theme'
import { LoginComponent } from './views/login/login.component'
import { DashboardModule } from './views/dashboard/dashboard.module'
import { ErrorComponent } from './views/error/error.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NbThemeModule.forRoot({ name: 'dark' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
