import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Que contiene el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    // Cosas visibles fuera del módulo
    exports: [
        ListadoComponent,
    ],
    // Módulos a usar
    imports: [
        CommonModule //Se importa para poder usar las directivas en los componentes del módulo
    ]
})
export class HeroesModule {}