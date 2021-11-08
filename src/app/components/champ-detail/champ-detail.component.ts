import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from 'src/app/services/champions.service';

interface Champion {
  name: string;
  lore: boolean;

}
@Component({
  selector: 'app-champ-detail',
  templateUrl: './champ-detail.component.html',
  styleUrls: ['./champ-detail.component.scss']
})
export class ChampDetailComponent implements OnInit {
  campeon: any = '';
  campeonHistoria = [];
  campeonTitulo = '';
  name: string = '';
  campeonrol = [];
  campeonspells = [];
  campeonspeed = [];
  datas: any[] = [];
  champions: Champion[] = [];
  descriptions: string[] = [];
  campeonHP = '';
  public parameterValue: string;
  constructor(private championService: ChampionsService, private activatedRouter: ActivatedRoute) {

}
  
  ngOnInit(): void {
    this.getChampion();
    let name = this.activatedRouter.snapshot.params["name"];
    
    this.activatedRouter.params.subscribe(parameter => {
      this.parameterValue = parameter.parameter
      this.parameterValue = this.activatedRouter.snapshot.params["name"];
      //console.log(this.parameterValue)
      this.getChampionbyName(name);
    })
  }

  getChampion(){
    let championData;

    this.champions = [];
    this.descriptions = [];
    this.championService.getChampions().subscribe(
      res => {
        let data: any = res;
        for (let key in data.data) {
          championData = {
            name: data.data[key].name,
            description: data.data[key].lore,
            image: data.data[key].image.full
          };
          this.champions.push(championData);
          this.descriptions.push(data.data[key].lore);
        }
        //console.log(this.champions);
        },
        
  err => {
    //console.log(Error);
    
  }
    );
  }

  getChampionbyName(name){
    this.championService.getChampion(name).subscribe(
      res => {
        let data: any = res;
        for (let key in data.data) {
        this.campeon = res;
        this.campeonHistoria = data.data[key].lore;
        this.campeonTitulo = data.data[key].title;
        this.campeonHP = data.data[key].stats.hp;
        this.campeonrol = data.data[key].tags
        this.campeonspells = data.data[key].spells[3].name;
        this.campeonspeed = data.data[key].stats.movespeed;
        console.log(this.campeon)
        }
      },
    err => {

    }
    );
  }
}
