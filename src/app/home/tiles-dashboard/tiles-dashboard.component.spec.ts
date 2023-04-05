import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesDashboardComponent } from './tiles-dashboard.component';

describe('TilesDashboardComponent', () => {
  let component: TilesDashboardComponent;
  let fixture: ComponentFixture<TilesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
