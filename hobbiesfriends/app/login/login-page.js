import { LoginViewModel } from './login-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LoginViewModel()
}
