import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  hobbies = ['Music', 'Cooking', 'Photography', 'Movies', 'Swimming']
  ngOnInit(): void {
  }

}
