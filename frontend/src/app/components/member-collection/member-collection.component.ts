import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-collection',
  templateUrl: './member-collection.component.html',
  styleUrls: ['./member-collection.component.css']
})
export class MemberCollectionComponent implements OnInit {
  submitted = false;
  referralid = '';
  memberCollectionForm: FormGroup;
  counterid: String;

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


    this.memberCollectionForm = this.fb.group({
      memberId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      receiptNumber: ['', [Validators.required]],
      receiptDate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.memberCollectionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('jk' + this.submitted);
    if (!this.memberCollectionForm.valid) {
      console.log(this.memberCollectionForm)
      console.log("memberform not valid");
      return false;
    } else {
      console.log("memberform VALID");
      return this.apiService.createIncome(this.memberCollectionForm.value).subscribe((data) => {
        console.log('successful!')

      },
      );


    }
  }
}
