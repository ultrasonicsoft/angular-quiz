import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairComponent } from './questionnair.component';

describe('QuestionnairComponent', () => {
  let component: QuestionnairComponent;
  let fixture: ComponentFixture<QuestionnairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
