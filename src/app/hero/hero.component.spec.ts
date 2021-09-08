import { HeroComponent } from './hero.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe(HeroComponent.name, () => {
  // Will check the component instance property had the correct value
  // Use shallow test to tet value render in html
  let fixture: ComponentFixture<HeroComponent>;
  let component: HeroComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });

  it('should have the correct hero', () => {
    component.hero = { id: 1, name: 'SuperDude', strength: 9 };
    expect(component.hero.name).toEqual('SuperDude');
  });

  it('should render the name hero in ancor tag', () => {
    component.hero = { id: 1, name: 'SuperDude', strength: 9 };
    fixture.detectChanges();
    const naviteElement = fixture.nativeElement.querySelector('a');
    expect(naviteElement.textContent).toContain('SuperDude');
  });
});
