import { ProfilViewModel } from './profil-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new ProfilViewModel()
}

export function toProfil(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/creationProfil/creationProfil-page");
}