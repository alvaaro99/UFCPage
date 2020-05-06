import { Component, OnInit } from '@angular/core';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { SimulatorService } from 'src/app/shared/services/simulator/simulator.service';
import { IFighter } from 'src/app/shared/models/fighter.model';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css'],
})
export class SimulatorComponent implements OnInit {
  public weightToShow: string;
  public dateToShow: Date;
  public redFighter: IFighter;
  public blueFighter: IFighter;
  constructor(public simulatorService: SimulatorService) {
    this.weightToShow = null;
    this.dateToShow = null;
    this.redFighter = null;
    this.blueFighter = null;
  }

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
}
