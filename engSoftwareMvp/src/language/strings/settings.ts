export type ISettingsStrings = {
  title: string;
  userName: string;
  email: string;
  toggles: {
    notifications: string;
    email: string;
    schedule: string;
  };
  mentor: string;
  buttons: {
    changePassword: string;
    changeContact: string;
    deleteAccount: string;
  };
};

const SETTINGS_STRINGS = {
  "pt-BR": {
    title: "CONFIGURAÇÕES",
    userName: "Usuário",
    email: "E-mail para contato",
    toggles: {
      notifications: "Desativar notificações",
      email: "Desativar envio de e-mails",
      schedule: "Desativar conta para novas ofertas",
    },
    mentor: "Aviso de Ofertas",
    buttons: {
      changePassword: "mudar senha",
      changeContact: "alterar contato",
      deleteAccount: "excluir conta",
    },
  },
  "en-US": {
    title: "SETTINGS",
    userName: "User",
    email: "Contact e-mail",
    toggles: {
      notifications: "Turn off notifications",
      email: "Don't send me e-mails",
      schedule: "Turn off new offers for my account",
    },
    mentor: "Offers notice",
    buttons: {
      changePassword: "change password",
      changeContact: "change email",
      deleteAccount: "delete account",
    },
  },
};

export default SETTINGS_STRINGS;
