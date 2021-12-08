import { PasswordViewModel } from './password-view-model'

export function onBackButtonTap(args) {
  const view = args.object
  const page = view.page

  page.frame.goBack()
}

export function alertEnvoie(args) {
    const alertEnvoie = {
        title: "Mot de passe envoyé",
        message: "Votre lien de nouveau mot de passe a été envoyé au mail indiqué",
        cancelButtonText: "Merci"
    };

    action(alertEnvoie).then((result) => {
      console.log(result);
      const choice = args.object;
      const page = choice.page;
      page.frame.navigate("~/login/login-page");
    });
  }
