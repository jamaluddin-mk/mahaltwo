import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.apiService.logout();
    console.log('logout Successful!');
    this.ngZone.run(() => this.router.navigateByUrl('/login'));
  }

}
