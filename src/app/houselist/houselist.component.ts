import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';
 
@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrls: ['./houselist.component.css']
})
export class HouselistComponent implements OnInit {
  searchTerm = "";
  constructor(private houseService:HouseService) { }
  houses:House[] = [];
  ngOnInit(): void {
    this.houses = this.houseService.getAllHouses();
  }

  getHouseResult():House[]{
    if(this.searchTerm == ""){
      return this.houses;
    }
    else{
      return this.houseService.getAllofType(this.searchTerm);
    }
  }
  searchHousesByType(type:string):void{
    console.log(type);
    this.searchTerm = type;
  }

}
