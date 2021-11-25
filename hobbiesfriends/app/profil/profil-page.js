import { ProfilViewModel } from './profil-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new ProfilViewModel()
}
