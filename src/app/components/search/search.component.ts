import { Component, OnInit } from '@angular/core';

interface City {
  value: string;
  viewValue: string;
}

interface District {
  value: string;
  viewValue: string;
}


interface Amount {
  value: string;
  viewValue: string;
}

interface Bedroom {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cities: City[] = [
    {value: '0', viewValue: 'São Paulo'},
    {value: '1', viewValue: 'Rio de Janeiro'},
    {value: '2', viewValue: 'Socorro'},
  ];

  neighborhoods: District[] = [
    {value: '0', viewValue: 'Grajaú'},
    {value: '1', viewValue: 'Santo Amaro'},
    {value: '2', viewValue: 'Socorro'},
  ];

  quantities: Amount[] = [
    {value: '0', viewValue: 'R$ 1000,00'},
    {value: '1', viewValue: 'R$ 2000,00'},
    {value: '2', viewValue: 'R$ 3000,00'},
  ];

  bedrooms: Bedroom[] = [
    {value: '0', viewValue: '1'},
    {value: '1', viewValue: '2'},
    {value: '2', viewValue: '3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
