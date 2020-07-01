import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTablesSQLComponent } from './add-tables-sql.component';

describe('AddTablesSQLComponent', () => {
  let component: AddTablesSQLComponent;
  let fixture: ComponentFixture<AddTablesSQLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTablesSQLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTablesSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
