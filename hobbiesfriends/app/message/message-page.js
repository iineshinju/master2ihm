import { MessageViewModel } from './message-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new MessageViewModel()
}
