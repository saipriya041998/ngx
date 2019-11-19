import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-democor',
  templateUrl: './democor.component.html',
  styleUrls: ['./democor.component.css']
})
export class DemocorComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalservice: BsModalService) { }
  itemObjectsLeft: any[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' }
  ];

  itemObjectsRight: any[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' }
  ];
  ngOnInit() {
  }
  openModal(template){
    this.modalRef = this.modalservice.show(template);
  }

}
