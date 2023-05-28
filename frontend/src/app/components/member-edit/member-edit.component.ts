import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})

export class MemberEditComponent implements OnInit {
  submitted = false;
  referralid = '';
  memberForm: FormGroup;
  counterid: String;
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

  PageTitle: "hwdfx";
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
    let id = this.route.snapshot.paramMap.get('id');
    this.getMember(id);
    this.route.queryParams.subscribe(params => {
      this.referralid = params['ref'];
    });
  }

  mainForm() {
    this.route.queryParams.subscribe(params => {
      this.referralid = params['ref'];
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.getMember(id);
    // this.memberForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   dob: ['', [Validators.required]],
    //   mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   address: ['', [Validators.required]],
    //   inBangaloreSince: ['', [Validators.required]],
    //   googleLocation: ['', [Validators.required]],
    //   nativeAddress: ['', [Validators.required]],
    //   qualification: ['', [Validators.required]],
    //   houseCategory: ['', [Validators.required]],
    //   incomeRange: ['', [Validators.required]],
    //   memberId: ['rr' + this.counterid, [Validators.required]],
    //   profession: ['', [Validators.required]],
    //   professionNature: ['', [Validators.required]],
    //   organization: ['', [Validators.required]],
    //   memberStatus: ['', [Validators.required]],
    //   designation: ['', [Validators.required]],
    //   email: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    //     ],
    //   ],
    //  area: ['', [Validators.required]],

    //refid:this.referralid,
    //   });
  }


  updateArea(e) {
    this.memberForm.get('area').setValue(e, {
      onlySelf: true,
    });
  }

  updateQualification(e) {
    this.memberForm.get('qualification').setValue(e, {
      onlySelf: true,
    });
  }

  updateProfession(e) {
    this.memberForm.get('profession').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.memberForm.controls;
  }

  getMember(id) {
    alert(id);
    this.apiService.getMember(id).subscribe((data) => {
      alert(data['name']);
      this.memberForm.setValue({
        // memberId: data['memberId'],
        name: data['name'],
        // dob: data['dob'],
        // mobileNumber: data['mobileNumber'],
        // address: data['address'],
        // inBangaloreSince: data['inBangaloreSince'],
        // googleLocation: data['googleLocation'],
        // nativeAddress: data['nativeAddress'],
        // qualification: data['qualification'],
        // houseCategory: data['houseCategory'],
        // incomeRange: data['incomeRange'],
        // profession: data['profession'],
        // professionNature: data['professionNature'],
        // organization: data['organization'],
        // memberStatus: data['memberStatus'],
        // designation: data['designation'],
        // email: data['email'],
      });
    });
  }


  onSubmit() {
    this.submitted = true;
    console.log('jk' + this.submitted);
    if (!this.memberForm.valid) {
      console.log(this.memberForm)
      console.log("memberform not valid");
      return false;
    } else {
      console.log("memberform VALID");

      return this.apiService.createMember(this.memberForm.value).subscribe((data) => {
        console.log('Member successfully created!'),
          this.ngZone.run(() => this.router.navigateByUrl('/confirm-member?ref=' + data._id));
      },
        //   error: (e) => {
        //     console.log(e);
        //   },
      );
    }
  }
}
