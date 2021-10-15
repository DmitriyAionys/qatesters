import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required,
      Validators.pattern("^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$")
    ]],
    lastName: ['', [
      Validators.required,
      Validators.pattern("^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$")
    ]],
    email:['',[
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$")
    ]],
    dob: [''],
    gender: [''],
    hobbies: [''],
    words: ['']
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

  ngOnInit(){

  }

  onSubmit() {
    console.log('form data is ', this.profileForm.value);
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

}
