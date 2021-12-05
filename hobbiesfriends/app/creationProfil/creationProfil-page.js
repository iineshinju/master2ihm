import { CreationProfilViewModel } from './creationProfil-view-model';



export function onNavigatingTo(args) {
   const component = args.object
  component.bindingContext = new CreationProfilViewModel()
}

export function toLocalisation(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/localisation/localisation-page");
}

export function toAjoutPassions(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/ajoutPassions/ajoutPassions-page");
}

export function toNotifications(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/notifications/notifications-page");
}

export function toProfil(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/profil/profil-page");
}
