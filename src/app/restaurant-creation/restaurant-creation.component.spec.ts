import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCreationComponent } from './restaurant-creation.component';

describe('RestaurantCreationComponent', () => {
  let component: RestaurantCreationComponent;
  let fixture: ComponentFixture<RestaurantCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
