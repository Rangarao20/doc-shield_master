import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveHomeComponent } from './receive-home.component';

describe('ReceiveHomeComponent', () => {
  let component: ReceiveHomeComponent;
  let fixture: ComponentFixture<ReceiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
