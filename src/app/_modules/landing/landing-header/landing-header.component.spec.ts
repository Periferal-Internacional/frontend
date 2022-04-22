import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingHeaderComponent } from './landing-header.component';

describe('LandingHeaderComponent', () => {
  let component: LandingHeaderComponent;
  let fixture: ComponentFixture<LandingHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
