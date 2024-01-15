import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm here
import { DisplayService } from '../display.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  name: string = '';
  email: string = '';
  message: string = '';

  @ViewChild('myForm') myForm!: NgForm;

  isLoading: boolean = false;
  isDelivered: boolean = false;
  agreePrivacyPolicy: boolean = false;
  formSubmitted: boolean = false;
  privacyPolicyInteracted: boolean = false;
  privacyPolicyTouched: boolean = false;
  imageSource = 'assets/img/icons/arrowWhite.png';

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


  togglePrivacyPolicy() {
    if (this.agreePrivacyPolicy) {
      this.privacyPolicyInteracted = true;
    }
    this.agreePrivacyPolicy = !this.agreePrivacyPolicy;
    this.privacyPolicyTouched = true;
    if (!this.agreePrivacyPolicy) {
      this.formSubmitted = true;
    }
  }


  onSubmit() {
    if (this.agreePrivacyPolicy) {
      // Proceed with form submission logic
    } else {
      this.formSubmitted = true;
    }
  }


  changeImageSource(hovered: boolean): void {
    if (hovered) this.imageSource = 'assets/img/icons/arrowWhite2.png';
    else this.imageSource = 'assets/img/icons/arrowWhite.png';
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
    await fetch('https://stefan-herrmann.org/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      });

    // Text anzeigen Nachricht gesendet
    this.name = "";
    this.email = "";
    this.message = "";

/*     this.myForm.controls['name'].enable();
    this.myForm.controls['email'].enable();
    this.myForm.controls['message'].enable(); */

    this.isLoading = false;
    this.isDelivered = true;
    this.myForm.resetForm();
  }
}
