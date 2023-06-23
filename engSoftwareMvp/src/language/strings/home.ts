export type IHomeStrings = {
  header: string;
  unsigned: { createAccount: string; login: string };
  searchBox: {
    label: string;
    placeHolder: string;
  };
};

const HOME_STRINGS = {
  "pt-BR": {
    header: "Home",
    unsigned: { createAccount: "CRIAR CONTA", login: "LOGIN" },
    signed: { logout: "SAIR", editProfile: "CONCLUIR PERFIL" },
    searchBox: {
      label: "Em qual matéria você tem dúvida?",
      placeHolder: "Teoria da Bat-Caverna",
    },
  },
  "en-US": {
    header: "Home",
    unsigned: { createAccount: "SIGN IN", login: "LOGIN" },
    signed: { logout: "LOGOUT", editProfile: "COMPLETE PROFILE" },
    searchBox: {
      label: "Wich course do you have questions?",
      placeHolder: "The Batcave theory",
    },
  },
};

export default HOME_STRINGS;
