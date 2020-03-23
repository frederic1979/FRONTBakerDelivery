import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCreationComponent } from './command-creation.component';

describe('CommandCreationComponent', () => {
  let component: CommandCreationComponent;
  let fixture: ComponentFixture<CommandCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
