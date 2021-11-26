import { MessgaeItemsViewModel } from './message-items-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new MessageItemsViewModel()
}

export function onItemTap(args) {
  const view = args.view
  const page = view.page
  const tappedItem = view.bindingContext

  page.frame.navigate({
    moduleName: 'message/message-item-detail/message-item-detail-page',
    context: tappedItem,
    animated: true,
    transition: {
      name: 'slide',
      duration: 200,
      curve: 'ease',
    },
  })
}
