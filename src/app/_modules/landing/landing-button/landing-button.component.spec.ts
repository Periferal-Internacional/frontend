import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingButtonComponent } from './landing-button.component';

describe('LandingButtonComponent', () => {
  let component: LandingButtonComponent;
  let fixture: ComponentFixture<LandingButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
