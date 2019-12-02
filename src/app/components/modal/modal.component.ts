import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoresService } from '../../services/stores.service';
import { log } from 'util';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public storesService: StoresService,public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }

 async onSaveFormulario() {
   

       // tslint:disable-next-line:prefer-const

       if(this.storesService.store.id == null)
       {
         let aux_id;
         this.storesService.showStores().subscribe(res =>{
          console.log(res.id);
          
             aux_id = res.id
        });
       let nuevoStore = {
        name: this.storesService.store.name,
        address: this.storesService.store.address,
        brand_id: this.storesService.store.brand_id
       };
       console.log('nuevo', nuevoStore);
      

       this.storesService.agregaStore(nuevoStore).subscribe(res =>{
        
        
        
       });

      }else{
        this.storesService.editaStore(this.storesService.store).subscribe(res =>{

        });
      }
    this.cierra();

}

  cierra(): void {
    this.dialogRef.close();
  }
}
