import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { RTLReducer } from '../../store/rtl.reducers';
import { LoggerService } from '../../shared/services/logger.service';

import { CLTransactionsComponent } from './transactions.component';
import { SharedModule } from '../../shared/shared.module';
import { CLQueryRoutesComponent } from './query-routes/query-routes.component';
import { mockDataService, mockLoggerService } from '../../shared/test-helpers/mock-services';
import { CommonService } from '../../shared/services/common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../../shared/services/data.service';

describe('CLTransactionsComponent', () => {
  let component: CLTransactionsComponent;
  let fixture: ComponentFixture<CLTransactionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CLTransactionsComponent, CLQueryRoutesComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        RouterTestingModule,
        StoreModule.forRoot(RTLReducer, {
          runtimeChecks: {
            strictStateImmutability: false,
            strictActionImmutability: false
          }
        })
      ],
      providers: [
        CommonService,
        { provide: LoggerService, useClass: mockLoggerService },
        { provide: DataService, useClass: mockDataService }
      ]
    }).
      compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
