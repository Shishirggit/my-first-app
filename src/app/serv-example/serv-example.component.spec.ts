import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServExampleComponent } from './serv-example.component';

describe('ServExampleComponent', () => {
  let component: ServExampleComponent;
  let fixture: ComponentFixture<ServExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
