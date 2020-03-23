import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandModificationComponent } from './command-modification.component';

describe('CommandModificationComponent', () => {
  let component: CommandModificationComponent;
  let fixture: ComponentFixture<CommandModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
