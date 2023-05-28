import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCollectionComponent } from './member-collection.component';

describe('MemberCollectionComponent', () => {
  let component: MemberCollectionComponent;
  let fixture: ComponentFixture<MemberCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
