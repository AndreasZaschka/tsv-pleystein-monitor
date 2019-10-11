import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MannschaftZweiComponent} from './mannschaft-zwei.component';

describe('MannschaftZweiComponent', () => {
  let component: MannschaftZweiComponent;
  let fixture: ComponentFixture<MannschaftZweiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MannschaftZweiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannschaftZweiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
