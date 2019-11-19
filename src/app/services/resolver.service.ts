import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductResolved } from '../models/products';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<ProductResolved> {

  constructor(private data: ProductService) { }
  resolve(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any>{
    return this.data.getallproducts().pipe(
      map(x=>({data:x, errormessage:''})),
      catchError(err=>{
        return of({data:null,errormessage:err.message});
      })
    );
  }

}
