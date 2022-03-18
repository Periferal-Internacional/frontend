import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliverablesComponent } from './deliverables.component';

describe('FileUploadComponent', () => {
  let component: DeliverablesComponent;
  let fixture: ComponentFixture<DeliverablesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
