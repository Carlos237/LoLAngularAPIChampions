// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ChampsTableComponent } from "src/app/components/champs-table/champs-table.component";

export const environment = {
  production: true,
  baseUrl: "http://ddragon.leagueoflegends.com/cdn/11.20.1/data/es_ES/championFull.json",
  ChampsUrl: "http://ddragon.leagueoflegends.com/cdn/11.19.1/data/es_ES/champion"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
