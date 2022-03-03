// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false,

  url: 'http://127.0.0.1:8000/api',

 firebaseConfig : {
    apiKey: "AIzaSyDEdedrhOEhmEakXSpBByQ4r6rbIv_v3o4",
    authDomain: "ngblogventa.firebaseapp.com",
    databaseURL: "https://ngblogventa-default-rtdb.firebaseio.com",
    projectId: "ngblogventa",
    storageBucket: "ngblogventa.appspot.com",
    messagingSenderId: "913007174996",
    appId: "1:913007174996:web:1ef22535290997591254c1",
    measurementId: "G-DVDLJD7296"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
