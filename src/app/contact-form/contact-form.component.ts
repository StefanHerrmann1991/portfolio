import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm here
import { DisplayService } from '../display.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  // Declaring properties for the form fields
  name: string = '';
  email: string = '';
  message: string = '';

  @ViewChild('myForm') myForm!: NgForm;

  isLoading: boolean = false;
  isDelivered: boolean = false;

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Here is a safe place to access your ViewChild properties.
  }

  async sendMail() {
    this.isLoading = true;

    this.myForm.controls['name'].disable();
    this.myForm.controls['email'].disable();
    this.myForm.controls['message'].disable();

    // Animation anzeigen
    let fd = new FormData();
    fd.append('name', this.name)
    fd.append('email', this.email)
    fd.append('message', this.message)
    await fetch('https://stefan-herrmann.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      });

    // Text anzeigen Nachricht gesendet
    this.name = "";
    this.email = "";
    this.message = "";

    this.myForm.controls['name'].enable();
    this.myForm.controls['email'].enable();
    this.myForm.controls['message'].enable();

    this.isLoading = false;
    this.isDelivered = true;
    this.myForm.resetForm();
    setTimeout(() => {
      this.isDelivered = false;
    }, 2500);
  }
}
