import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverablesComponent } from './deliverables.component';

describe('UploadManagerComponent', () => {
  let component: DeliverablesComponent;
  let fixture: ComponentFixture<DeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
