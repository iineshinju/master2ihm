export function onNavigatingTo(args) {
  const page = args.object

  page.bindingContext = args.context
}

export function onBackButtonTap(args) {
  const view = args.object
  const page = view.page

  page.frame.goBack()
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
