
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { StoresService } from 'src/app/services/stores.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  displayedColumns: string[] = ['id','name'] ;
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public storesService: StoresService) { }

  ngOnInit() {
    this.muestra();
  }

  muestra(){
    this.storesService.showStores().subscribe( res => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res.id;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.data);
      
      
    }, error => { console.log(JSON.stringify(error));
     } );
  }
}




export interface PeriodicElement {

  id: number;
 name: string;
 
  
  
}