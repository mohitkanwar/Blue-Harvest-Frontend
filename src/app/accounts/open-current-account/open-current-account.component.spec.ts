import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCurrentAccountComponent } from './open-current-account.component';

describe('OpenCurrentAccountComponent', () => {
  let component: OpenCurrentAccountComponent;
  let fixture: ComponentFixture<OpenCurrentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCurrentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCurrentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
