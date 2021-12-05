import { LocalisationViewModel } from './localisation-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LocalisationViewModel()
}


