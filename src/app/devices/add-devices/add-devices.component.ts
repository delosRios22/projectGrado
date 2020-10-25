import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.scss']
})
export class AddDevicesComponent implements OnInit {
  objectDeviceForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.objectDeviceForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.compose([Validators.required])],
      identification: ['', Validators.compose([Validators.required])],
      cellphone: ['', Validators.compose([Validators.required])],
      city: [''],
      departament: [''],
      birth: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

}
