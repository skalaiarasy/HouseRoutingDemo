import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-housedetail',
  templateUrl: './housedetail.component.html',
  styleUrls: ['./housedetail.component.css']
})
export class HousedetailComponent implements OnInit {
  house:House = {
    id:-1,
    type:"",
    floors:0,
    beds:0,
    baths:0,
    sqfoot:0,
    img:""
  };

  constructor(private houseService:HouseService, private route:ActivatedRoute) { }
  houses:House[] =[];
  searchTerm = "";
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number=Number(routeParams.get("id"));

    this.house = this.houseService.getHouseFromId(id);
  }

  


}
