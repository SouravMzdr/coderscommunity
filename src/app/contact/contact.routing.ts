import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const appRoutes: Routes=[
    {path:'',component:ContactComponent},
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})

export class ContactRoutingModule{

}