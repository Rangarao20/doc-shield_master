import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverHomeComponent } from './receiver-home.component';

describe('ReceiverHomeComponent', () => {
  let component: ReceiverHomeComponent;
  let fixture: ComponentFixture<ReceiverHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
