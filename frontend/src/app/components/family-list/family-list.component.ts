import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})

export class FamilyListComponent implements OnInit {
  Family: any = [];

  constructor(private apiService: ApiService) {
    this.readFamily();
  }

  ngOnInit(): void {
    this.readFamily();
  }

  readFamily() {
    this.apiService.getFamilys().subscribe((data) => {
      this.Family = data;
    });
  }

  removeFamily(family, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteFamily(family._id).subscribe((data) => {
        this.Family.splice(index, 1);
      });
    }
  }


}
