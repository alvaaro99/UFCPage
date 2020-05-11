import { Component, OnInit } from '@angular/core';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { SimulatorService } from 'src/app/shared/services/simulator/simulator.service';
import { IFighter } from 'src/app/shared/models/fighter.model';
import { tap, delay } from 'rxjs/operators';
import { IFight } from 'src/app/shared/models/fight.model';
import { LoadingAlert } from 'src/app/shared/alerts/loading.alert';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css'],
})
export class SimulatorComponent implements OnInit {
  public weightToShow: string = null;
  public dateToShow: Date = null;
  public redFighter: IFighter = null;
  public blueFighter: IFighter = null;
  public resultFight: IFight = null;

  constructor(public simulatorService: SimulatorService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    if (this.simulatorService.fighters.length === 0) {
      this.simulatorService
        .getAll()
        .subscribe({ error: (error) => new CustomException(error.error) });
    }
  }

  simulateFight() {
    const loadingAlert = new LoadingAlert();
    this.simulatorService
      .simulate(this.redFighter, this.blueFighter)
      .pipe(
        delay(1000),
        tap((fight: IFight) => {
          loadingAlert.close();
          this.resultFight = fight;
        })
      )
      .subscribe({
        error: (error) => new CustomException(error.error),
      });
  }

  newFight() {
    this.weightToShow = null;
    this.dateToShow = null;
    this.redFighter = null;
    this.blueFighter = null;
    this.resultFight = null;
  }

  repeatFight() {
    this.resultFight = null;
  }
}
