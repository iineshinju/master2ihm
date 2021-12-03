import { InscriptionViewModel } from './inscription-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new InscriptionViewModel()
}

export function toGoogle(args) {
  const Googlelogin = {
    title: "Connexion à votre compte Google",
    message: "Entrez votre adresse gmail et votre mot de passe :",
    okButtonText: "Connexion",
    cancelButtonText: "Retour",
    userNameHint: "Entrez votre adresse gmail",
    passwordHint: "Entrez votre mot de passe"
  };

  login(Googlelogin).then((loginResult) => {
    console.log(loginResult.result);
    const choice = args.object;
    const page = choice.page;
    if (loginResult.result && loginResult.userName != "" && loginResult.password != "") {
      page.frame.navigate("~/creationProfil/creationProfil-page");
    }
  });

}

export function toProfil(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/creationProfil/creationProfil-page");
}

export function toLogin(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/login/login-page");
}
