import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { AgmCoreModule } from "@agm/core";
import { ToastrModule } from "ngx-toastr";
import { FullComponent } from "./layouts/full/full.component";
import { BlankHeaderComponent } from "./layouts/blank_header/blank_header.component";
import { BlankComponent } from "./layouts/blank/blank.component";

import { NgxSnakeToCamelModule } from "ngx-snake-to-camel";

import { VerticalNavigationComponent } from "./shared/vertical-header/vertical-navigation.component";
import { VerticalSidebarComponent } from "./shared/vertical-sidebar/vertical-sidebar.component";
// import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { HorizontalNavigationComponent } from "./shared/horizontal-header/horizontal-navigation.component";
import { HorizontalSidebarComponent } from "./shared/horizontal-sidebar/horizontal-sidebar.component";

import { Approutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./shared/spinner.component";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from "ngx-perfect-scrollbar";
import { LoginComponent } from "./shared/login/login.component";
import { ErrorInterceptor, UrlInterceptor } from "./_helpers";
import { SharedModule } from "./shared/shared.module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20,
};
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankHeaderComponent,
    BlankComponent,
    VerticalNavigationComponent,
    // BreadcrumbComponent,
    VerticalSidebarComponent,
    HorizontalNavigationComponent,
    HorizontalSidebarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
    }),
    PerfectScrollbarModule,
    SharedModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8",
    // }),
    HttpClientModule,
    NgxSnakeToCamelModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
