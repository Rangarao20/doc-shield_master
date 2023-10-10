import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerMainComponent } from './signer-main.component';

describe('SignerMainComponent', () => {
  let component: SignerMainComponent;
  let fixture: ComponentFixture<SignerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
