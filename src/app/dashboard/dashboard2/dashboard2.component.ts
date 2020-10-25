import { AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
// import {MatSort} from '@angular/material/sort';
// import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})

export class Dashboard2Component implements OnInit{
  dataSource = [];
  columnsToDisplay = [
    "id",
    "name",
    "identification",
    "cellphone",
    "city"
    
  ];
  // dataSource: MatTableDataSource<any>;
  @Input() empList: any = JSON.parse(localStorage.getItem('data'));
  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    
    this.dataSource = this.empList
    // console.log(this.dataSource);
    console.log(this.dataSource);
    

  }

  // columnsToDisplay: any = [{
  //   "id": this.empList[0].id,
  //   "name": this.empList[0].name,
  //   "identification": this.empList[0].identification,
  //   "cellphone": this.empList[0].cellphone,
  //   "city": this.empList[0].city
  // }
    
  // ];

  

    

  // @ViewChild(MatSort) sort: MatSort;

  
}
