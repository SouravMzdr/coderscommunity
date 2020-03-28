
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { ContactComponent } from './contact.component'

export const routes: Routes = [
  { path: '', component: ContactComponent }, // default route of the module

]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)