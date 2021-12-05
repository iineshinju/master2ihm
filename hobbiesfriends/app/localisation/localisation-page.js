import { LocalisationViewModel } from './localisation-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LocalisationViewModel()
}
export function toProfil(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/creationProfil/creationProfil-page");
}

