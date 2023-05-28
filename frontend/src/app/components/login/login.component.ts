import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  referralid = '';
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.referralid = params['ref'];
    });


  }

  mainForm() {
    this.route.queryParams.subscribe(params => {
      this.referralid = params['ref'];
    });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      //console.log("one");
      return false;
    } else {
      return this.apiService.login(this.loginForm.value).subscribe((data) => {
        console.log('login Successful!'),
          this.ngZone.run(() => this.router.navigateByUrl('/members-list'));
      },
      );
    }
  }
}

// [BsonRepresentation(BsonType.ObjectId)]
//     public string Id
//     {
//         get { return Convert.ToString(_id); }
//         set { _id = MongoDB.Bson.ObjectId.Parse(value); }
//     }

//}
