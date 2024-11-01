import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {
  registerform: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  onsubmit() {
    if (this.registerform.valid) {
      const body = this.registerform.value;
      this.http.post('http://localhost:3000/form-data', body).subscribe({
        next: response =>{

          console.log('Form submitted successfully', response),
          this.registerform.reset();
        },
        error: err => console.log('Any error', err),
      });
      
    }
  }
}
