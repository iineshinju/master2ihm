import { HomeViewModel } from './home-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new HomeViewModel()
}

export function onItemTap(args) {
  const view = args.view
  const page = view.page
  const tappedItem = view.bindingContext

  page.frame.navigate({
    moduleName: 'home/home-item-detail/home-item-detail-page',
    context: tappedItem,
    animated: true,
    transition: {
      name: 'slide',
      duration: 200,
      curve: 'ease',
    },
  })
}

export function refuser(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/home/home-page");
}

export function accepter(args) {
  const button = args.object;
  const page = button.page;

  const confirmOptions = {
    title: "Match",
    message: "Vous pouvez commencer à parler avec votre nouvel(le) ami(e) !!"
      + "\nVoulez-vous discuter avec maintenant ?",
    okButtonText: "Discuter",
    cancelButtonText: "Pas tout de suite"
  };
  confirm(confirmOptions)
    .then((result) => {
      if (result) {
        page.frame.navigate("~/message/message-items-page");
      }
      else {
        page.frame.navigate("~/home/home-page");
      }
    });

}

