import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerissueComponent } from './signerissue.component';

describe('SignerissueComponent', () => {
  let component: SignerissueComponent;
  let fixture: ComponentFixture<SignerissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
