import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantModificationComponent } from './restaurant-modification.component';

describe('RestaurantModificationComponent', () => {
  let component: RestaurantModificationComponent;
  let fixture: ComponentFixture<RestaurantModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
