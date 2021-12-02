import { WelcomeViewModel } from './welcome-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new WelcomeViewModel()
}

export function toInscription(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/inscription/inscription-page");
}

export function toConnexion(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/login/login-page");
}
