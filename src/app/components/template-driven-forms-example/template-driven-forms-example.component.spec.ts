import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example.component';

describe('TemplateDrivenFormsExampleComponent', () => {
  let component: TemplateDrivenFormsExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
