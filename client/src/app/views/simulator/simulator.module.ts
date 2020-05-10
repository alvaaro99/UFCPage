import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from '../../views/simulator/simulator.component';
import { SelectFighterComponent } from '../../shared/components/select-fighter/select-fighter.component';
import { ResultFightComponent } from '../../shared/components/result-fight/result-fight.component';
import { FighterCardComponent } from '../../shared/components/fighter-card/fighter-card.component';
import { CustomPipesModule } from 'src/app/shared/pipes/custom-pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimulatorRoutingModule } from './simulator-routing.module';

@NgModule({
  declarations: [
    SelectFighterComponent,
    ResultFightComponent,
    FighterCardComponent,
    SimulatorComponent,
  ],
  imports: [
    CommonModule,
    SimulatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
  ],
})
export class SimulatorModule {}
