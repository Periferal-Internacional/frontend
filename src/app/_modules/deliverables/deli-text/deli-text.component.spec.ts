import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliTextComponent } from './deli-text.component';

describe('DeliTextComponent', () => {
  let component: DeliTextComponent;
  let fixture: ComponentFixture<DeliTextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
