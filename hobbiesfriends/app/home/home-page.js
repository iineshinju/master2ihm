import { HomeViewModel } from './home-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new HomeViewModel()
}
