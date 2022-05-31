import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliDropdownComponent } from './deli-dropdown.component';

describe('DeliDropdownComponent', () => {
  let component: DeliDropdownComponent;
  let fixture: ComponentFixture<DeliDropdownComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
