import { InscriptionViewModel } from './inscription-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new InscriptionViewModel()
}

export function toProfil(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/creationProfil/creationProfil-page");
}

export function toLogin(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/login/login-page");
}
