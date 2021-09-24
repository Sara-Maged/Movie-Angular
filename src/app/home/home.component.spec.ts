import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('works', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    //expect(app).toBeTruthy();
  });
});


// describe('Component: Home', () => {
//   // let component: HomeComponent;
//   // let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     });
//     //.compileComponents();
//   });

//   // beforeEach(() => {
//   //   let fixture = TestBed.createComponent(HomeComponent);
//   //   let app = fixture.debugElement.componentInstance;
//   //   app.sawsaan;
//   //   //fixture.detectChanges();
//   // });

//   it("Function working", () => {
//     let fixture = TestBed.createComponent(HomeComponent);
//     let app = fixture.debugElement.componentInstance;
//     //app.ngOnInit();
//     expect(app).toBeTruthy();
//   });

// });

// //   it("Check getList is called from ngOnInit", () => {
// //     component.ngOnInit();
// //     // expect(component.getList).toHaveBeenCalled();
// //     // component.ngOnInit();

// //     // const spyGetList = spyOn(component, 'getList');
// //     // component.ngOnInit();
// //     // expect(spyGetList).toHaveBeenCalled();

// //     // const spy = spyOn(component, 'getList').and.callThrough();
// //     // fixture.detectChanges();
// //     // expect(spy).toHaveBeenCalled();
// // });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });


