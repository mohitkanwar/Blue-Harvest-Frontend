import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentSettingsComponent } from './environment-settings.component';

describe('EnvironmentSettingsComponent', () => {
  let component: EnvironmentSettingsComponent;
  let fixture: ComponentFixture<EnvironmentSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
