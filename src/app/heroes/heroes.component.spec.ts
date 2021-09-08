// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';

describe(HeroesComponent.name, () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Spider', strength: 9 },
      { id: 2, name: 'WW', strength: 11 },
      { id: 3, name: 'Super man', strength: 15 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  });

  it('should have no heroes when start', () => {
    mockHeroService.getHeroes.and.returnValue(of([]));
    component.ngOnInit();
    expect(component.heroes.length).toEqual(0);
  });

  it('should remove the indicated hero from the heroes list', () => {
    // adiciona um retorno para o método 'deleteHero' do service,
    // assim quando chamado no escopo do componente.delete()
    // o fluxo irá continuar
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;
    component.delete(HEROES[2]);
    expect(component.heroes.length).toBe(2);
  });

  it('should call deleteHero from heroService', () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;
    component.delete(HEROES[2]);
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    expect(mockHeroService.deleteHero).toHaveBeenCalled();
  });

  it('should return list of heroes when called getHeroes', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    component.getHeroes();
    expect(component.heroes.length).toEqual(3);
  });

  it('should have a hero when call add hero', () => {
    mockHeroService.addHero.and.returnValue(of({ id: 1, name: 'Super Girl', strength: 11 }));
    component.heroes = [];
    component.add('Super Girl');
    expect(component.heroes.length).toEqual(1);
  });

  it('should returnwhen call add hero without string', () => {
    component.heroes = [];
    component.add('');
    expect(component.heroes.length).toEqual(0);
  });
});
