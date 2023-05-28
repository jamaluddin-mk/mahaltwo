import { Component, NgZone } from '@angular/core';
import { ApiService } from './service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mean-stack-crud-app';
  parentData: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private apiService: ApiService) {
    //  this.receiveData();
  }

  receiveData(xdata: any) {
    console.log(xdata);
    this.parentData = xdata;
  }

  logout() {
    this.apiService.logout();
    console.log('logout Successful!');
    this.ngZone.run(() => this.router.navigateByUrl('/login'));
  }

}
