import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-row-hover',
  templateUrl: './message-row-hover.component.html',
  styleUrls: ['./message-row-hover.component.scss']
})
export class MessageRowHoverComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { text: 'One', cols: 9, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 5, rows: 1, color: '#DDBDF1' },
  ];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
