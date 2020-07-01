import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedQueryComponent } from './personalized-query.component';

describe('PersonalizedQueryComponent', () => {
  let component: PersonalizedQueryComponent;
  let fixture: ComponentFixture<PersonalizedQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
