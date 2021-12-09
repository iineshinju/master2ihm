import { LocalisationViewModel } from './localisation-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LocalisationViewModel()
}
export function toProfil(args) {
  const alertEnvoie = {
    title: "Ajout de la localisation",
    message: "Votre localisation a bien été enregistré.",
    cancelButtonText: "Merci"
  };

  action(alertEnvoie).then((result) => {
    console.log(result);
    const button = args.object;
    const page = button.page;
    page.frame.navigate("~/creationProfil/creationProfil-page");
  });
}

