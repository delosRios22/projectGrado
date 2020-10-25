import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//ANGULAR MATERIAL COMPONENTS

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    MatCardModule,
    MatTableModule,
  ],
  providers: [
  ]
})
export class MaterialModule { }
