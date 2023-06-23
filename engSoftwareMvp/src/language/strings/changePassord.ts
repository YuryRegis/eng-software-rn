export type IChangePassowrdStrings = {
  title: string;
  form: {
    password: {
      title: string;
      error: { required: string };
    };
    newPassword: {
      title: string;
      error: { required: string };
    };
    confirmPassword: {
      title: string;
      error: { required: string; invalid: string };
    };
  };
  confirmBtn: string;
  modalConfirmation: {
    title: string;
    message: string;
    confirmBtn: string;
  };
};

const CHANGE_PASSWORD_STRINGS = {
  "pt-BR": {
    title: "MUDAR SENHA",
    form: {
      password: {
        title: "Senha atual:",
        error: { required: "Campo obrigatório" },
      },
      newPassword: {
        title: "Nova senha:",
        error: { required: "Campo obrigatório" },
      },
      confirmPassword: {
        title: "Confirmar senha:",
        error: {
          required: "Campo obrigatório",
          invalid: "Não confere com a nova senha",
        },
      },
    },
    confirmBtn: "Alterar senha",
    modalConfirmation: {
      title: "Sucesso",
      message: "Sua senha foi alterada com sucesso.",
      confirmBtn: "Prosseguir",
    },
  },
  "en-US": {
    title: "CHANGE PASSWORD",
    form: {
      password: {
        title: "Current password:",
        error: { required: "Current password is required" },
      },
      newPassword: {
        title: "Password:",
        error: { required: "New password is required" },
      },
      confirmPassword: {
        title: "Confirm password:",
        error: {
          required: "Confirm password is required",
          invalid: "Confirm password do not match",
        },
      },
    },
    confirmBtn: "Change password",
    modalConfirmation: {
      title: "Success",
      message: "Your password has been changed successfully.",
      confirmBtn: "Continue",
    },
  },
};

export default CHANGE_PASSWORD_STRINGS;
