import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:FormGroup;
  constructor(private fb:FormBuilder,private data:ProductService) { }

  ngOnInit() {
    this.signup=this.fb.group({
      fname:new FormControl(null),
      lname:new FormControl(null),
      dob:new FormControl(null),
      email:new FormControl(null),
      username:new FormControl(null),
      password:new FormControl(null),

    });
  }

  onsignup(item){
    this.data.signup(item.username,item.password);
  }

}
