import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDiaglogComponent } from './error-diaglog.component';

describe('ErrorDiaglogComponent', () => {
  let component: ErrorDiaglogComponent;
  let fixture: ComponentFixture<ErrorDiaglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDiaglogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
