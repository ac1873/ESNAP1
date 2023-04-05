import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultDashboardComponent } from './search-result-dashboard.component';

describe('SearchResultDashboardComponent', () => {
  let component: SearchResultDashboardComponent;
  let fixture: ComponentFixture<SearchResultDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
