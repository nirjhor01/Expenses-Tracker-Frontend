import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysumComponent } from './categorysum.component';

describe('CategorysumComponent', () => {
  let component: CategorysumComponent;
  let fixture: ComponentFixture<CategorysumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorysumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorysumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
