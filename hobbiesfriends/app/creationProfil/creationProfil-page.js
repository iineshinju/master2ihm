import { HomeViewModel } from './creationProfil-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new HomeViewModel()
}
