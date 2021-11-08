import { Component, OnInit, ViewChild } from '@angular/core';
import { ChampionsService } from 'src/app/services/champions.service';
import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champs-table',
  templateUrl: './champs-table.component.html',
  styleUrls: ['./champs-table.component.scss']
})
export class ChampsTableComponent implements OnInit {

  displayedColumns: string[] = ['name','description','image'];
  datas: any[] = [];
  dataSource = new MatTableDataSource<any>(this.datas)
  champions: string[] = [];
  descriptions: string[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  constructor(private ChampService: ChampionsService,private router: Router) {
   }

  ngOnInit(): void {
    this.getChampions(name);
  }


  getChampions(name){
    let championData;
    this.champions = [];
    this.descriptions = [];
    this.ChampService.getChampions().subscribe(
      res => {
        let data: any = res;
        for (let key in data.data) {
          championData = {
            name: data.data[key].name,
            description: data.data[key].blurb,
            image: data.data[key].image.full
          };
          this.datas.push(championData)
          this.dataSource = new MatTableDataSource<any>(this.datas);
          this.dataSource.paginator = this.paginator;
          //this.champions.push(data.data[key].name)
          //this.descriptions.push(data.data[key].blurb)
          for (let key in this.datas){
            if (this.datas[key].name.includes("'")){
              this.datas[key].name=this.datas[key].name.replace("'","")
              this.datas[key].name=this.datas[key].name.replace("G","g")
              this.datas[key].name=this.datas[key].name.replace("Z","z")
              this.datas[key].name=this.datas[key].name.replace("M","m")
              if (this.datas[key].name.includes("VelKoz")){
                this.datas[key].name=this.datas[key].name.replace("K","k")
              }
              if (this.datas[key].name.includes("KaiSa")){
                this.datas[key].name=this.datas[key].name.replace("S","s")
              }
              
          }
        }

        for (let key in this.datas){
          if (this.datas[key].name.includes(" ")){
            this.datas[key].name=this.datas[key].name.replace(" ","")
          }
          else if (this.datas[key].name.includes(".")){
            this.datas[key].name=this.datas[key].name.replace(".","")
          }
          else if (this.datas[key].name.includes(".")){
            this.datas[key].name=this.datas[key].name.replace(".","")
          }
          else if (this.datas[key].name.includes("NunuyWillump")){
            this.datas[key].name=this.datas[key].name.replace("yWillump","")
          }
          else if (this.datas[key].name.includes("Kogmaw")){
            this.datas[key].name=this.datas[key].name.replace("m","M")
          }
          else if (this.datas[key].name.includes("LeBlanc")){
            this.datas[key].name=this.datas[key].name.replace("B","b")
          }
          else if (this.datas[key].name.includes("NunuyWillump")){
            this.datas[key].name=this.datas[key].name.replace("yWillump","")
          }
          else if (this.datas[key].name.includes("MaestroYi")){
            this.datas[key].name=this.datas[key].name.replace("Maestro","Master")
          }
          else if (this.datas[key].name.includes("Bardo")){
            this.datas[key].name=this.datas[key].name.replace("Bardo","Bard")
          }
          else if (this.datas[key].name.includes("Wukong")){
            this.datas[key].name=this.datas[key].name.replace("Wukong","MonkeyKing")
          }
        }
           
          //console.log(data.data[key].name)
        }
        //console.log(this.champions)
        //console.log(this.descriptions)
      },
      error =>{
        console.log(error);
      }
    );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row){
    this.router.navigateByUrl(`champDetail/${row.name}`)
    //console.log(row)
  }

 
}

 