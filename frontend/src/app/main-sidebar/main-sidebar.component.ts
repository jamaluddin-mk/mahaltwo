import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<any>();

  public routerLinkVariableVL: string[] = ["/", "voters-list-full"];
  public routerLinkVariableCM: string[] = ["/", "create-member"];
  public routerLinkVariableML: string[] = ["/", "members-list"];
  public routerLinkVariableAF: string[] = ["/", "create-family"];
  public routerLinkVariableFL: string[] = ["/", "familys-list"];
  public routerLinkVariableDB: string[] = ["/", "dashboard"];
  public routerLinkVariableMC: string[] = ["/", "member-collection"];

  emitData(xtitle: string) {
    const dataToSend = xtitle;
    this.dataEvent.emit(dataToSend);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
