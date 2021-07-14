import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlueprintComponent } from './single-blueprint.component';

describe('SingleBlueprintComponent', () => {
  let component: SingleBlueprintComponent;
  let fixture: ComponentFixture<SingleBlueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBlueprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
