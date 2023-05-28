import { Family } from '../../model/Family';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.css']
})


export class FamilyEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  familyData: Family[];
  MahalList: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateFamily();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getFamily(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      mahal: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      amount: ['300', [Validators.required]],
      familydate: ['', [Validators.required]],
    });
  }

  // Choose options with select-dropdown
  updateMahal(e) {
    this.editForm.get('mahal').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getFamily(id) {
    this.apiService.getFamily(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        mahal: data['mahal'],
        mobileNumber: data['mobileNumber'],
        address: data['address'],
        quantity: data['quantity'],
        amount: data['amount'],
        familydate: data['familydate'],
      });
    });
  }

  updateFamily() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      mahal: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      amount: ['', [Validators.required]],

    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      this.router.navigateByUrl('/familys-list');
    }
  }
}
