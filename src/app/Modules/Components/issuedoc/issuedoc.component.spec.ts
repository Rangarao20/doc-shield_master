import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedocComponent } from './issuedoc.component';

describe('IssuedocComponent', () => {
  let component: IssuedocComponent;
  let fixture: ComponentFixture<IssuedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
