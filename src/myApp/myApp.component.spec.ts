import { TestBed, async } from '@angular/core/testing';
import { MyAppComponent } from './myApp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ang-measures'`, () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Ang-measures');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Ang-measures app is running!');
  });
});
