export type IDiscoverStrings = {
  title: string;
  header: {
    input: {
      placeholder: string;
      title: string;
    };
    empty: string;
  };
};

const DISCOVER_STRINGS = {
  "pt-BR": {
    title: "PESQUISA",
    header: {
      input: {
        placeholder: "Serviço de pintura",
        title: "O que está procurando?",
      },
      empty: "Sem resultados. Tente outra busca.",
    },
  },
  "en-US": {
    title: "DISCOVER",
    header: {
      input: {
        placeholder: "Painting services",
        title: "What you looking for?",
      },
      empty: "No results found. Please try again.",
    },
  },
};

export default DISCOVER_STRINGS;
