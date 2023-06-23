export type IMentorDetailStrings = {
  title: {
    availableTime: string;
    confirmation: string;
  };
  modalConfirmationSchedule: {
    title: string;
    description: string;
    button: {
      confirm: string;
      cancel: string;
    };
  };
};

const MENTOR_DETAIL_STRINGS = {
  "pt-BR": {
    title: {
      availableTime: "Horários disponíveis",
      confirmation: "Aguardando confirmação",
    },
    modalConfirmationSchedule: {
      title: "Confirmar agendamento",
      description: "Tem certeza?",
      button: {
        confirm: "OK",
        cancel: "Não",
      },
    },
  },
  "en-US": {
    title: {
      availableTime: "Available time",
      confirmation: "Waiting for confirmation",
    },
    modalConfirmationSchedule: {
      title: "Confirm scheduling",
      description: "Are you sure?",
      button: {
        confirm: "OK",
        cancel: "No",
      },
    },
  },
};

export default MENTOR_DETAIL_STRINGS;
