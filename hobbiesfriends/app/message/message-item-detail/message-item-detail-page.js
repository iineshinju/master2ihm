export function onNavigatingTo(args) {
  const page = args.object

  page.bindingContext = args.context
}

export function onBackButtonTap(args) {
  const view = args.object
  const page = view.page

  page.frame.goBack()
}

export function bloquer(args) {
  const button = args.object;
  const page = button.page;
  const alertBloquer = {
    title: "Bloqué",
    message: "Vous venez de bloquer cet(te) ami(e).",
    cancelButtonText: "Au revoir"
  };

  action(alertBloquer).then((result) => {
    console.log(result);
    page.frame.navigate("~/message/message-items-page");
  });
}

export function toProfil(args) {
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
