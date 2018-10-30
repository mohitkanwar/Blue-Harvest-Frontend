import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFixedBarComponent } from './top-fixed-bar.component';

describe('TopFixedBarComponent', () => {
  let component: TopFixedBarComponent;
  let fixture: ComponentFixture<TopFixedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFixedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFixedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
