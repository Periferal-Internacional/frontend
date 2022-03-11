import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsStatisticComponent } from './analytics-statistic.component';

describe('AnalyticsStatisticComponent', () => {
  let component: AnalyticsStatisticComponent;
  let fixture: ComponentFixture<AnalyticsStatisticComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
