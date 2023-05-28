import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-confirm',
  templateUrl: './member-confirm.component.html',
  styleUrls: ['./member-confirm.component.css']
})
export class MemberConfirmComponent implements OnInit {

  refid='';


  constructor(private router: Router, private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      //this.refid=params['ref'];

    });

  }

  public accept() {
    this.router.navigateByUrl('/create-member')
  }

  public dismiss() {
    this.router.navigateByUrl('/create-member')
  }

}
