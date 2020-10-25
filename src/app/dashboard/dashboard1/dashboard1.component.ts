import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component implements OnInit {
  
  objectUserForm: FormGroup;
  is_edit = null;
  validForm = true;
  empList: any = [];
  constructor(public formBuilder: FormBuilder){}

  ngOnInit() {
    // this.loadData();
    this.objectUserForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.compose([Validators.required, Validators.pattern('[A-ZÑa-zñÀ-ÿ]+[A-ZÑa-zñÀ-ÿ ]*'), Validators.minLength(3), Validators.maxLength(45)])],
      identification: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6), Validators.maxLength(12)])],
      cellphone: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(20)])],
      city: ['', Validators.compose([Validators.required, Validators.pattern('[A-ZÑa-zñÀ-ÿ]+[A-ZÑa-zñÀ-ÿ ]*'), Validators.minLength(3), Validators.maxLength(45)])],
      departament: ['', Validators.compose([Validators.required, Validators.pattern('[A-ZÑa-zñÀ-ÿ]+[A-ZÑa-zñÀ-ÿ ]*'), Validators.minLength(3), Validators.maxLength(45)])],
      birth: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[ÑA-Zña-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), Validators.minLength(4), Validators.maxLength(70)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])]
    });
  }

  sendDataUser() {
    const value = this.objectUserForm.getRawValue()
    if (!this.objectUserForm.valid) {
      this.dirtyApplicantForm();
    } else {
      this.validForm = true;
    }
    this.empList.push(value)
    localStorage.setItem('data', JSON.stringify(this.empList))
    const guardado = localStorage.getItem('data');
    this.empList = JSON.parse(guardado);
    console.log(this.empList);
    this.ngOnInit();
  }

  dirtyApplicantForm() {
    const controls = this.objectUserForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        if (/^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$/.test(name)) {
          $(`#${name}`).addClass('is-invalid');
          continue;
        }
        controls[name].markAsTouched({ onlySelf: true });
      }
    }
    this.validForm = false;
  }
  


}
