import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { ChartsComponent } from './views/dashboard/pages/charts/charts.component'
import { EntriesComponent } from './views/dashboard/pages/entries/entries.component'
import { MainComponent } from './views/dashboard/pages/main/main.component'
import { UserProfileComponent } from './views/dashboard/pages/user-profile/user-profile.component'
import { ErrorComponent } from './views/error/error.component'
import { LoginComponent } from './views/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'entries', component: EntriesComponent },
      { path: 'user-profile', component: UserProfileComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
