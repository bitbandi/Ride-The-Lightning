import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonService } from '../../shared/services/common.service';
import { DataService } from '../../shared/services/data.service';
import { mockDataService, mockLoggerService } from '../../shared/test-helpers/mock-services';
import { SharedModule } from '../../shared/shared.module';

import { RTLReducer } from '../../store/rtl.reducers';
import { ECLConnectionsComponent } from './connections.component';

describe('ECLConnectionsComponent', () => {
  let component: ECLConnectionsComponent;
  let fixture: ComponentFixture<ECLConnectionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ECLConnectionsComponent],
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
        { provide: DataService, useClass: mockDataService }
      ]
    }).
      compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECLConnectionsComponent);
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
