import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResolved, Products } from '../models/products';

@Component({
  selector: 'app-productres',
  templateUrl: './productres.component.html',
  styleUrls: ['./productres.component.css']
})
export class ProductresComponent implements OnInit {
prodata:ProductResolved;
arr:Products[];
errmess:string='';
  constructor(private act:ActivatedRoute) {
    this.prodata=this.act.snapshot.data['pdata'];
  }

  ngOnInit() {
    this.arr=this.prodata.data;
    console.log(this.arr);
    this.errmess=this.prodata.errormessage;

  }

}
