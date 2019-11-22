import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  constructor(private fb:FormBuilder,private data:ProductService,private route:Router) { }

  ngOnInit() {
    this.login=this.fb.group({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    });
  }
  refresh(){
    this.login.reset();
  }
  onlogin(item) {
    this.data.login(
      item.username,
      item.password
    );
    if (this.data.redirectURL) {
      this.route.navigateByUrl(this.data.redirectURL);
    } else {
      this.route.navigate(['/shop']);
    }
  }
}
