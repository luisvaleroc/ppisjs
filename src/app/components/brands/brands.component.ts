import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BrandsService } from '../../services/brands.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  displayedColumns: string[] = ['name','apellido'] ;
  dataSource: any;

  brand: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  
  ngOnInit() {
    this.muestra();  
  }
  constructor(private brandsService: BrandsService){ 
    
   

  }
  muestra(){
    this.brandsService.showBrand().subscribe( res => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res.results;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.data);
      
      
    }, error => { console.log(JSON.stringify(error));
     } );
  }
}

export interface PeriodicElement {

  name: string;
 apellido: string;
 edad: number;
  
  
}

