import { WelcomeViewModel } from './welcome-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new WelcomeViewModel()
}
