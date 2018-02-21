import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorderabe',
  templateUrl: './reorderabe.component.html',
  styleUrls: ['./reorderabe.component.css']
})
export class ReorderabeComponent implements OnInit {
  data = JSON.parse('[{"image":"/assets/smile.png","text":"Box 1"},{"image":"/assets/smile.png","text":"Box 2 has a medium text"},{"image":"/assets/smile.png","text":"Box 3 has a very very long"},{"image":"/assets/smile.png","text":"Box 4"}]');
  constructor() { }


  ngOnInit() {

  }

  moveItemUp(index) {
    let temp = this.data[index - 1];
    this.data[index - 1] = this.data[index];
    this.data[index] = temp;
  }

  moveItemDown(index) {
    let temp = this.data[index + 1];
    this.data[index + 1] = this.data[index];
    this.data[index] = temp;
  }

  removeItem(i) {
    this.data.splice(i, 1);
  }
}
