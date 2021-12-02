import { PasswordViewModel } from './password-view-model'

export function alertEnvoie() {
    const alertEnvoie = {
        title: "Mot de passe envoyé",
        message: "Votre lien de nouveau mot de passe a été envoyé au mail indiqué",
        cancelButtonText: "Merci"
    };

    action(alertEnvoie).then((result) => {
        console.log(result);
    });
  }