import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocissuepopupComponent } from './docissuepopup.component';

describe('DocissuepopupComponent', () => {
  let component: DocissuepopupComponent;
  let fixture: ComponentFixture<DocissuepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocissuepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocissuepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
