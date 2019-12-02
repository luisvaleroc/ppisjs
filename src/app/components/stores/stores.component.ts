
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StoresService } from 'src/app/services/stores.service';
import { ModalComponent } from "../modal/modal.component";
import { log } from 'util';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit, AfterViewInit {

  
  displayedColumns: string[] = ['id','name','adress','acciones'] ;
  dataSource = new MatTableDataSource();;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 

  constructor(public storesService: StoresService, public dialog: MatDialog) { }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.muestra();
  }
  ngAfterViewInit() {

    this.dataSource.sort = this.sort;

 }

  muestra(){
    this.storesService.showStores().subscribe( res => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res.store;
      this.dataSource.paginator = this.paginator;
      console.log(res);
      
      console.log(this.dataSource.data);
      
      
    }, error => { console.log(JSON.stringify(error));
     } );
  }

  onEdit(element) {
    this.cleanForm();
    this.abreModal();
    if (element) {
      this.storesService.store = element;
    }
  }
  
  agrega(){
   
    this.cleanForm();
    this.abreModal();

  }
  elimina(id: string){
    const val = confirm('¿Está seguro que desea eliminar');
    if (val) {
    this.storesService.eliminaStore(id).subscribe(res=>{
         this.muestra();
    });
  }
    
  }
  abreModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(ModalComponent, dialogConfig);
  }

  cleanForm(): void {
    this.storesService.store.name= "";
    this.storesService.store.address = "";
  }






}






export interface PeriodicElement {

  id: number;
 name: string;
 adress: string;
 
  
  
}