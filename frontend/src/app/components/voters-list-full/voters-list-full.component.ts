import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-voters-list-full',
  templateUrl: './voters-list-full.component.html',
  styleUrls: ['./voters-list-full.component.css']
})
export class VotersListFullComponent implements OnInit {

  submitted = false;
  referralid = '';
  loginForm: FormGroup;
  rows: number = 569;
  cols: number = 5;


  votersList: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.votersList = [];
    this.mainForm();
  }

  mainForm() {
    this.apiService.getVoters().subscribe((data) => {
      this.votersList = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      return this.apiService.login(this.loginForm.value).subscribe((data) => {
        console.log('login Successful!'),
          this.ngZone.run(() => this.router.navigateByUrl('/voters-list-full'));
      },
      );
    }
  }

}
