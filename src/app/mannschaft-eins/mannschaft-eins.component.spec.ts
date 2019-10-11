import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MannschaftEinsComponent} from './mannschaft-eins.component';

describe('MannschaftEinsComponent', () => {
  let component: MannschaftEinsComponent;
  let fixture: ComponentFixture<MannschaftEinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MannschaftEinsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannschaftEinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
