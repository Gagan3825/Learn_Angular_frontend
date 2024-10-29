import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveLearnComponent } from './directive-learn.component';

describe('DirectiveLearnComponent', () => {
  let component: DirectiveLearnComponent;
  let fixture: ComponentFixture<DirectiveLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
