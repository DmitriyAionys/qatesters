import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient) { }

  profileForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required,
      Validators.pattern("^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$")
    ]],
    lastName: ['', [
      Validators.required,
      Validators.pattern("^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$")
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,19}$")
    ]],
    dob: [''],
    gender: [''],
    hobbies: [''],
    words: ['',
      Validators.pattern("^[0-9]*$")],
    agreement: ['']
  });

  hobbies = new FormControl();

  hobbieList: string[] = [
    "Music",
    "Photography",
    "Singing",
    "Drawing",
    "Cooking",
    "Swimming"
  ]

  ngOnInit() {
    this.http.get<any>('http://httpstat.us/404').subscribe(data => {
      this.profileForm = data.total;
    })
  }

  onSubmit() {
    console.log('form data is ', this.profileForm.value);

  }

  onFileSelected(){
    this.http.get<any>('http://httpstat.us/500').subscribe(data => {
      this.profileForm = data.total;
    })
  }

  get firstName() {
    return this.profileForm.get("firstName");
  }

  get lastName() {
    return this.profileForm.get("lastName");
  }

  get email() {
    return this.profileForm.get("email");
  }

  get password() {
    return this.profileForm.get("password");
  }

  get words() {
    return this.profileForm.get("words");
  }
}
