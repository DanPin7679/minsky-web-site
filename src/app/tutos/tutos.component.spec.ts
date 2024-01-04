import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosComponent } from './tutos.component';

describe('TutosComponent', () => {
  let component: TutosComponent;
  let fixture: ComponentFixture<TutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
