import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraComponent } from './infra.component';

describe('InfraComponent', () => {
  let component: InfraComponent;
  let fixture: ComponentFixture<InfraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraComponent]
    });
    fixture = TestBed.createComponent(InfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
