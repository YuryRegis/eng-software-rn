export type IMYScheduleStrings = {
  title: string;
  status: {
    confirmed: string;
    cancelled: string;
    pendingConfirmation: string;
    pendigPayment: string;
  };
  button: string;
  tooltip: {
    cancel: string;
    changeSchedule: string;
    moreInfo: string;
  };
};

const MY_SCHEDULE_STRINGS = {
  "pt-BR": {
    title: {
      mySchedule: "MINHAS PROPOSTAS",
      myScheduleHistory: "HISTÓRICO DE PROPOSTAS",
    },
    status: {
      confirmed: "Confirmado",
      cancelled: "Cancelado",
      pendingConfirmation: "Aguardando confirmação",
      pendigPayment: "Aguardando estorno",
    },
    button: "Ver histórico",
    tooltip: {
      solicitation: "Solicitar nova proposta",
      cancel: "Cancelar monitoria",
      changeSchedule: "Alterar termos",
      moreInfo: "Mais informações",
    },
  },
  "en-US": {
    title: {
      mySchedule: "MY PROPOSALS",
      myScheduleHistory: "PROPOSALS HISTORY",
    },
    status: {
      confirmed: "Confirmed",
      cancelled: "Cancelled",
      pendingConfirmation: "Pending confirmation",
      pendigPayment: "Pending payment",
    },
    button: "Go to history",
    tooltip: {
      solicitation: "Accept proposal",
      cancel: "Deny proposal",
      changeSchedule: "Change terms",
      moreInfo: "More info",
    },
  },
};

export default MY_SCHEDULE_STRINGS;
