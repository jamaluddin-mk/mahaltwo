import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  Member: any = [];

  constructor(private apiService: ApiService) {
    this.readMember();
  }

  ngOnInit(): void {
    this.readMember();
  }

  readMember() {
    this.apiService.getMembers().subscribe((data) => {
      this.Member = data;
    });
  }

  removeMember(member, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteMember(member._id).subscribe((data) => {
        this.Member.splice(index, 1);
      });
    }
  }


}
