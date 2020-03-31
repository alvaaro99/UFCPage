import { Component, OnInit } from '@angular/core';
import { FighterRanking } from 'src/app/shared/models/fighterRanking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ranking: FighterRanking[];
  public weightToShow: string;
  constructor() {}

  ngOnInit(): void {
    this.getRanking();
    this.weightToShow = 'all';
  }

  getRanking(): void {
    this.ranking = [];
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
    this.ranking.push({
      date: '2013-01-26',
      weightclass: 'libra por libra',
      name: 'Gilber Melendez',
      rank: 11
    });
    this.ranking.push({
      date: '2013-01-25',
      weightclass: 'semipesado',
      name: 'Gilber Melendez1',
      rank: 12
    });
    this.ranking.push({
      date: '2013-01-27',
      weightclass: 'pesado',
      name: 'Gilber Melendez2',
      rank: 15
    });
  }
}
