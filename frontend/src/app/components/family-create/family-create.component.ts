import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-family-create',
  templateUrl: './family-create.component.html',
  styleUrls: ['./family-create.component.css']
})



export class FamilyCreateComponent implements OnInit {
  submitted = false;
  referralid = '';
  familyForm: FormGroup;
  AreaList: any =
    [
      'Annasandra Palya',
      'Islampur',
      'Shastri Nagar',
      'Basva Nagar',
      'Kagdaspura',
      'G M Palya',
      'Mallesh Palya',
      'Thippasandra',
      'Jeevanbheema Nagar',
      'Kodihalli',
      'Other Area',
    ];
  QualificationList: any =
    [
      '10th Pass',
      '12th Pass',
      'Diploma',
      'BE / B.Tech',
      'MBA',
      'MCA',
      'ME / M.Tech',
      'MSc',
      'B.Com',
      'B.Pharm',
      'BA',
      'BBA / BBM',
      'BCA',
      'BDS',
      'BEd',
      'BHM',
      'BSc',
      'CA',
      'LLB',
      'MBBS',
      'Ph.D',
      'M.Com',
      'M.Pharm',
      'MA',
      'MDS',
      'MEd',
      'MS',
      'Certificate Course ITI',
      'Below 10th',
      'No Schooling',
      'Other Course',
    ];


  ProfessionList: any =
    [
      'medical',
      'engineer',
      'business',
      'other',
    ];

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


    this.familyForm = this.fb.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      inBangaloreSince: ['', [Validators.required]],
      googleLocation: ['', [Validators.required]],
      nativeAddress: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      houseCategory: ['', [Validators.required]],
      familyId: ['', [Validators.required]],
      familydate: [new Date()],
      profession: ['', [Validators.required]],
      professionNature: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      familyStatus: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],

      area: ['', [Validators.required]],

    });
  }


  updateArea(e) {
    this.familyForm.get('area').setValue(e, {
      onlySelf: true,
    });
  }

  updateQualification(e) {
    this.familyForm.get('qualification').setValue(e, {
      onlySelf: true,
    });
  }

  updateProfession(e) {
    this.familyForm.get('profession').setValue(e, {
      onlySelf: true,
    });
  }

  get myForm() {
    return this.familyForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    console.log('jk' + this.submitted);
    if (!this.familyForm.valid) {
      console.log(this.familyForm)
      console.log("familyform not valid");
      return false;
    } else {
      console.log("familyform VALID");

      return this.apiService.createFamily(this.familyForm.value).subscribe((data) => {
        console.log('Family successfully created!'),
          this.ngZone.run(() => this.router.navigateByUrl('/confirm-family?ref=' + data._id));
      },
      );
    }
  }
}
