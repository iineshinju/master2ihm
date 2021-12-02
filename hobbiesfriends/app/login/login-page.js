import { LoginViewModel } from './login-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LoginViewModel()
}

export function toPassword(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/login/password-page");
}