import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGithubComponent } from './detalle-github.component';

describe('DetalleGithubComponent', () => {
  let component: DetalleGithubComponent;
  let fixture: ComponentFixture<DetalleGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
