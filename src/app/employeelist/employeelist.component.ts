import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  // empId = [];


  employeeArray = [];

  constructor(private emp: EmployeeService, private route: Router) {
    this.employeeArray = this.emp.getAllEmployee();
  }

  ngOnInit() {
  }
  Id(i: number) {
    // this.empId = [];
    // for (let i = 0; i <= this.empId; i++) {
    //   this.empId.push(i + 1);

    // }
    // alert(i);
    this.emp.SelectedEmployee = i;
    this.route.navigateByUrl('/employee');
  }
}
