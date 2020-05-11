// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  GATEWAY_URL: 'http://localhost:9990/',
  ENDPOINT_PRODUCTS: 'products/',
  ENDPOINT_RANKING: 'ranking/',
  PRODUCT_URL: 'http://localhost:9998/',
  ENDPOINT_USERS: 'users/',
  ENDPOINT_LOGIN: 'login/',
  ENDPOINT_REGISTER: 'register/',
  ENDPOINT_ME: 'me/',
  ENDPOINT_MODIFY: 'modify/',
  ENDPOINT_SIMULATOR: 'simulator',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
