import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedQuerySQLComponent } from './personalized-query-sql.component';

describe('PersonalizedQuerySQLComponent', () => {
  let component: PersonalizedQuerySQLComponent;
  let fixture: ComponentFixture<PersonalizedQuerySQLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedQuerySQLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedQuerySQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
