export type IMentorListStrings = {
  card: {
    status: {
      online: string;
      offline: string;
      busy: string;
    };
    message: string;
    button: string;
  };
};

const MENTOR_LIST_STRINGS = {
  "pt-BR": {
    card: {
      status: {
        online: "disponível",
        offline: "ausente",
        busy: "ocupado",
      },
    },
    message:
      "Ambição guiada pela excelência. Busco constantemente o aprimoramento e o sucesso através do comprometimento, da paixão e da inovação.",
    button: "conversar",
  },
  "en-US": {
    card: {
      status: {
        online: "online",
        offline: "offline",
        busy: "busy",
      },
    },
    message:
      "Ambição guiada pela excelência. Busco constantemente o aprimoramento e o sucesso através do comprometimento, da paixão e da inovação.",
    button: "contact",
  },
};

export default MENTOR_LIST_STRINGS;
