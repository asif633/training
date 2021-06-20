import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { HeroComponent } from '../components/hero/hero.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    HeroComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomButtonComponent,
    HeroComponent,
    CardComponent
  ]
})
export class SharedModule { }
