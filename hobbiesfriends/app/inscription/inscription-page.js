import { InscriptionViewModel } from './inscription-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new InscriptionViewModel()
}
