import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='https://nodejsapidemo.herokuapp.com/products/';
  constructor(private http:HttpClient,private route:Router) { }

  getallproducts(){
    return this.http.get(this.url);
  }

  deletepro(pro){
    let head=new HttpHeaders().set("Content-Type", "application/json");
    return this.http.delete(this.url+pro,{headers:head});
  }

  addnewprod(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url,body,{headers:head});
  }

  updatepro(pro_id,item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.url+pro_id,body,{headers:head});
  }
  currentUser;
  redirectURL: string;
  login(username:string,password:string){
    if(username=='admin' && password=='123'){
      this.currentUser={
        username:username,
        password:password,
        isAdmin:true
      };
      return ;
    }
    this.currentUser={
      username:username,
      password:password,
      isAdmin:false
    };
  }

  logout(){
    this.currentUser=null;
    this.redirectURL='';
    this.route.navigate(['']);
  }

  get isLoggedIn():boolean{
    return !!this.currentUser;
  }

  signup(username:string,password:string){


  }
}
