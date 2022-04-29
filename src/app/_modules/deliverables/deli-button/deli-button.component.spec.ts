import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliButtonComponent } from './deli-button.component';

describe('DeliButtonComponent', () => {
  let component: DeliButtonComponent;
  let fixture: ComponentFixture<DeliButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
