import { HomeViewModel } from './creationProfil-view-model';

const genre = ["Homme", "Femme", "Autre"];

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new HomeViewModel()
}
//export function onListPickerLoaded(fargs) {
 // const listPickerComponent = fargs.object;
 // listPickerComponent.on("selectedIndexChange", (args) => {
 //     const picker = args.object;
     // console.log(`index: ${picker.selectedIndex}; item" ${genre[picker.selectedIndex]}`);
  //});
//}

export function toLocalisation(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/localisation/localisation-page");
}

export function toAjoutPassions(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/ajoutPassions/ajoutPassions-page");
}