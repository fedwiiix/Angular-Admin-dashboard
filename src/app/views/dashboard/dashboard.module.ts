import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './pages/main/main.component'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ChartsModule } from 'ng2-charts'

import { NbEvaIconsModule } from '@nebular/eva-icons'
import { ChartsComponent } from './pages/charts/charts.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'
import { EntriesComponent } from './pages/entries/entries.component'
import {
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarService,
  NbMenuService,
  NbIconModule,
  NbActionsModule,
  NbSelectModule,
  NbToggleModule,
  NbContextMenuModule,
  NbPopoverModule,
  NbListModule
} from '@nebular/theme'
import { StatCardComponent } from './components/stat-card/stat-card.component'
import { DatatableComponent } from './components/datatable/datatable.component'
import { ChartComponent } from './components/chart/chart.component'

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    ChartsComponent,
    UserProfileComponent,
    EntriesComponent,
    StatCardComponent,
    DatatableComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    BrowserModule,
    RouterModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbCardModule,
    NbSidebarModule,
    NbActionsModule,
    ChartsModule,
    NbSelectModule,
    NbToggleModule,
    BrowserAnimationsModule,
    NbContextMenuModule,
    NbPopoverModule,
    NbListModule
  ],
  providers: [NbSidebarService, NbMenuService],
  exports: [DashboardComponent]
})
export class DashboardModule {}
