// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:
    "http://rootlessstage-env.eba-ympxmm9w.us-east-2.elasticbeanstalk.com/user_api",
  publicUrl:
    "http://rootlessstage-env.eba-ympxmm9w.us-east-2.elasticbeanstalk.com/public_api",
  // apiUrl: "http://localhost/user_api",
  // publicUrl: "http://localhost/public_api",

  adminUrl: "http://localhost/admin_api",
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
