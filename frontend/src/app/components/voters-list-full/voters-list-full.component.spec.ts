import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersListFullComponent } from './voters-list-full.component';

describe('VotersListFullComponent', () => {
  let component: VotersListFullComponent;
  let fixture: ComponentFixture<VotersListFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotersListFullComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
