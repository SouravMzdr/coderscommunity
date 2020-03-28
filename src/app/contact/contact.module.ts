import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    // CommonModule,
    routing
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
