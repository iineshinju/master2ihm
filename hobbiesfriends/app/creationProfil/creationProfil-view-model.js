import { fromObject } from '@nativescript/core'
var observableModule = require("/node_modules/@nativescript/core/data/observable"); // to install @nativescript, run :  npm install @nativescript/core

export function CreationProfilViewModel() {
  var viewModel = observableModule.fromObject({
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    genre : ["Homme", "Femme", "Autre"],
    selectedListPickerIndex: 0,
  });

  return viewModel;
}
