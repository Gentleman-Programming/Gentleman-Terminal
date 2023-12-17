import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandlineComponent } from './commandline.component';

describe('CommandlineComponent', () => {
  let component: CommandlineComponent;
  let fixture: ComponentFixture<CommandlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
