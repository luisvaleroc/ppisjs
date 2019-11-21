import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-residuos',
  templateUrl: './residuos.component.html',
  styleUrls: ['./residuos.component.css']
})
export class ResiduosComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'papelArchivo', 'carton', 'plastico', 'pvc','chatarra',
  'vidrio',
  'organicos',
  'ordinarios',
  'totalDia'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {

  fecha: string;
  papelArchivo: number;
  carton: number;
  plastico: number;
  pvc: number;
  chatarra: number;
  vidrio: number;
  organicos: number;
  ordinarios: number;
  totalDia: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '25-01-10', papelArchivo: 1.0079, carton: 2, plastico: 2, pvc: 3, chatarra: 3,
  vidrio: 5, organicos: 6, ordinarios: 7, totalDia: 100},{fecha: '25-01-10', papelArchivo: 1.0079, carton: 2, plastico: 2, pvc: 3, chatarra: 3,
  vidrio: 5, organicos: 6, ordinarios: 7, totalDia: 100},{fecha: '25-01-10', papelArchivo: 1.0079, carton: 2, plastico: 2, pvc: 3, chatarra: 3,
  vidrio: 5, organicos: 6, ordinarios: 7, totalDia: 100},{fecha: '25-01-10', papelArchivo: 1.0079, carton: 2, plastico: 2, pvc: 3, chatarra: 3,
  vidrio: 5, organicos: 6, ordinarios: 7, totalDia: 100}
];




