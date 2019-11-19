import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../models/products';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  alerts: any[] = [{}];
  id:number;
  modalRef:BsModalRef;
  product:Products[]=[];
  message: boolean=false;
  prod:FormGroup;
  isloading:boolean=false;
  constructor(private modalService: BsModalService,
    private data:ProductService,
    private fb:FormBuilder,
    private act:ActivatedRoute) {}

  ngOnInit() {
    this.isloading=true;
    this.id=this.act.snapshot.params["pro_id"];
    console.log(this.id);
    this.prod=this.fb.group({
      pro_id:new FormControl(null),
      pro_name:new FormControl(null),
      pro_price:new FormControl(null),
      pro_desc:new FormControl(null),
      pro_qty:new FormControl(null),
      pro_mfg:new FormControl(null),
      pro_img:new FormControl(null)
    });
    this.getproducts();
  }

  getproducts(){
    this.data.getallproducts().subscribe(
      (data:Products[])=>{
        this.product=data;
        this.isloading=false;
        console.log(this.product);
      }
    );
  }
  confirm(): void {
    this.message = true;
    // this.modalRef.hide();
  }
  decline(): void {
    this.message = false;
    this.modalRef.hide();
  }
  opendelModal(template,item){
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.confirm();
    if(this.message){
      this.data.deletepro(item.pro_id).subscribe(
        (data:any)=>{
          this.product.splice(this.product.indexOf(item),1);
        }
      );
    }
  }
  openAddpopup(addtemp){
    this.modalRef = this.modalService.show(addtemp);
  }
  AddProduct(item){
    this.prod.reset();
    this.data.addnewprod(item).subscribe(
      (data:any)=>{
        // alert('added successfully');
        this.alerts.push({
          type: 'success',
          msg: `New Product Added Successfully`,
          timeout: 3000
        });
        this.getproducts();
        this.modalRef.hide();
      }
    );
  }
  openEditpopup(editpop,item) {
    this.modalRef = this.modalService.show(editpop);
    this.prod.patchValue({
      pro_id:item.pro_id,
      pro_name:item.pro_name,
      pro_price:item.pro_price,
      pro_qty:item.pro_qty,
      pro_mfg:item.pro_mfg,
      pro_img:item.pro_img,
      pro_desc:item.pro_desc
    });
  }
  updateproduct(item) {
    this.data.updatepro(item.pro_id,item).subscribe(
      (data:any)=>{
        this.alerts.push({
          type: 'success',
          msg: `Product updated Successfully`,
          timeout: 5000
        });
        this.getproducts();
        this.prod.reset();
        this.modalRef.hide();
      }
    );
  }
}
