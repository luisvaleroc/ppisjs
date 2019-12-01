import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoresService } from '../../services/stores.service';


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

  onSaveFormulario() {
   

       // tslint:disable-next-line:prefer-const
       let nuevoStore = {
        name: this.storesService.store.name,
        address: this.storesService.store.address,
        brand_id: this.storesService.store.brand_id
       };
       console.log('nuevo', nuevoStore);
       this.storesService.agregaStore(nuevoStore).subscribe(res =>{
        
        
        
       });

    
    this.cierra();

}

  cierra(): void {
    this.dialogRef.close();
  }
}
