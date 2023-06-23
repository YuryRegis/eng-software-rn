const scheduleDAO = [
  {
    id: 1,
    status: "confirmed",
    title: "Manutenção de computadores",
    mentor: "José Francisco Gabriel Rafael",
    start: "29/06/2023 08:00",
    weekDay: new Date(2023, 5, 29, 8, 0, 0).getDay(),
  },
  {
    id: 2,
    status: "pendingConfirmation",
    title: "Planejamento arquitetural",
    mentor: "Rodolfo Antunes",
    start: "09/11/2023 12:30",
    weekDay: new Date(2023, 10, 9, 12, 30, 0).getDay(),
  },
  {
    id: 3,
    status: "cancelled",
    title: "Consultoria de negócios",
    mentor: "Angela Yu",
    start: "06/07/2023 18:00",
    weekDay: new Date(2022, 6, 6, 18, 0, 0).getDay(),
  },
];

export { scheduleDAO };
