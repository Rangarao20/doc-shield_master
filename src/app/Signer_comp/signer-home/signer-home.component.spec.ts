import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerHomeComponent } from './signer-home.component';

describe('SignerHomeComponent', () => {
  let component: SignerHomeComponent;
  let fixture: ComponentFixture<SignerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
