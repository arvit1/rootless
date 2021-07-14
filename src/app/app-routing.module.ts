import {Routes} from "@angular/router";

import {FullComponent} from "./layouts/full/full.component";
import {BlankHeaderComponent} from "./layouts/blank_header/blank_header.component";
import {LoginComponent} from "./shared/login/login.component";
import {PricingComponent} from "./pricing/pricing.component";
import {FormSubmitedComponent} from "./form-submited/form-submited.component";
import {MessagesComponent} from "./messages/messages.component";
import {SingupComponent} from "./shared/signup/singup.component";
import {RecoverPswComponent} from "./shared/recover_psw/recover_psw.component";

export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/", pathMatch: "full" },
      {
        path: "",
        loadChildren: () =>
          import("./starter/starter.module").then((m) => m.StarterModule),
      },
      // {
      //   path: "component",
      //   loadChildren: () =>
      //     import("./component/component.module").then((m) => m.ComponentsModule),
      // },
      {
        path: "experts",
        loadChildren: () =>
          import("./expert/expert.module").then((m) => m.ExpertModule),
      },
      {
        path: "blog",
        loadChildren: () =>
          import("./blogs/blogs.module").then((m) => m.BlogsModule),
      },
      {
        path: "courses",
        loadChildren: () =>
          import("./courses/courses.module").then((m) => m.CoursesModule),
      },
      {
        path: "blueprints",
        loadChildren: () =>
          import("./blueprints/blueprints.module").then(
            (m) => m.BlueprintsModule
          ),
      },
      {
        path: "events",
        loadChildren: () =>
          import("./events/events.module").then((m) => m.EventsModule),
      },
      {
        path: "faq",
        loadChildren: () =>
          import("./faq/faq.module").then((m) => m.FaqModule),
      },
      {
        path: "about-us",
        loadChildren: () =>
          import("./about-us/about-us.module").then((m) => m.AboutUsModule),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./contact/contact.module").then((m) => m.ContactModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./notifications/notifications.module").then((m) => m.NotificationsModule),
      },
      {
        path: "forum",
        loadChildren: () =>
          import("./forum/forum.module").then((m) => m.ForumModule),
      },
      {
        path: "saved-content",
        loadChildren: () =>
          import("./saved-content/saved-content.module").then((m) => m.SavedContentModule),
      },
      {
        path: "search",
        loadChildren: () =>
          import("./search/search.module").then((m) => m.SearchModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsModule),
      },
      {
        path: "pricing",
        loadChildren: () =>
          import("./pricing/pricing.module").then((m) => m.PricingModule),
      },
      {
        path: "messages",
        loadChildren: () =>
          import("./messages/messages.module").then((m) => m.MessagesModule),
      },
      {
        path: "form",
        loadChildren: () =>
          import("./form-submited/form-submited.module").then((m) => m.FormSubmitedModule),
      },
    ],
  },
  {
    path: "",
    component: BlankHeaderComponent,
    children: [
      { path: "", redirectTo: "/login", pathMatch: "full" },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "signup",
        component: SingupComponent,
      },
      {
        path: "recover",
        component: RecoverPswComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
