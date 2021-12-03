import { LoginViewModel } from './login-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new LoginViewModel()
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
      page.frame.navigate("~/home/home-page");
    }
  });

}

export function toFacebook(args) {
  const Facebooklogin = {
    title: "Connexion à votre compte Facebook",
    message: "Entrez votre identifiant et votre mot de passe :",
    okButtonText: "Connexion",
    cancelButtonText: "Retour",
    userNameHint: "Entrez votre identifiant",
    passwordHint: "Entrez votre mot de passe"
  };

  login(Facebooklogin).then((loginResult) => {
    console.log(loginResult.result);
    const choice = args.object;
    const page = choice.page;
    if (loginResult.result && loginResult.userName != "" && loginResult.password != "") {
      page.frame.navigate("~/home/home-page");
    }
  });

}

export function toPassword(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/login/password-page");
}

export function toHome(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("~/home/home-page");
}
