export type ILoginStrings = {
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

const LOGIN_STRINGS = {
  "pt-BR": {
    title: "Login",
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
    },
    confirmBtn: "Entrar",
  },
  "en-US": {
    title: "Login",
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
    },
    confirmBtn: "Submit",
  },
};

export default LOGIN_STRINGS;
