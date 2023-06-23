export type ICreateAccountStrings = {
  title: string;
  form: {
    email: {
      title: string;
      placeHolder: string;
      error: {
        required: string;
        invalid: string;
      };
    };
    password: {
      title: string;
      error: { required: string };
    };
  };
  confirmBtn: string;
};

const CREATE_ACCOUNT_STRINGS = {
  "pt-BR": {
    title: "Criar Conta",
    form: {
      email: {
        title: "E-mail",
        placeHolder: "exemplo@mail.com",
        error: {
          required: "campo de email é obrigatório",
          invalid: "formato de email inválido",
        },
      },
      password: {
        title: "Senha",
        error: { required: "campo de senha é obrigatório" },
      },
      passwordConfirm: {
        title: "Confirmar senha",
        error: {
          required: "confirmação de senha é obrigatório",
          notMatch: "senhas não conferem",
        },
      },
    },
    confirmBtn: "Entrar",
  },
  "en-US": {
    title: "Create Account",
    form: {
      email: {
        title: "E-mail",
        placeHolder: "example@mail.com",
        error: {
          required: "e-mail is required",
          invalid: "must be a valid e-mail",
        },
      },
      password: {
        title: "Password",
        error: { required: "password is required" },
      },
      passwordConfirm: {
        title: "Confirm password",
        error: {
          required: "please, confirm your password",
          notMatch: "passwords do not match",
        },
      },
    },
    confirmBtn: "Submit",
  },
};

export default CREATE_ACCOUNT_STRINGS;
