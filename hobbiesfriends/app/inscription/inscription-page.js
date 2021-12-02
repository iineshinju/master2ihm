import { InscriptionViewModel } from './inscription-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new InscriptionViewModel()
}

export function toLogin(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/creationProfil/creationProfil-page");
}

export function alertCreation() {
  const alertCreation = {
      title: "Compte crée",
      message: "Votre compte a été crée",
      cancelButtonText: "Merci"
  };

  action(alertCreation).then((result) => {
      console.log(result);
  });
}
