import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsPeopleComponent } from './analytics-people.component';

describe('AnalyticsPeopleComponent', () => {
  let component: AnalyticsPeopleComponent;
  let fixture: ComponentFixture<AnalyticsPeopleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
