import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact.routing';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  // exports:[ContactComponent]
})
export class ContactModule { }
