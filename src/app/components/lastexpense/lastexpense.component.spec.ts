import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastexpenseComponent } from './lastexpense.component';

describe('LastexpenseComponent', () => {
  let component: LastexpenseComponent;
  let fixture: ComponentFixture<LastexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastexpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
