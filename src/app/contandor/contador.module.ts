import { NgModule } from '@angular/core';
import { ContandorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContandorComponent,
    ],
    exports: [
        ContandorComponent
    ]
})
export class ContadorModule {}