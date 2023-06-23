const scheduleDAO = [
  {
    id: 1,
    status: "confirmed",
    title: "Serviço de pintura",
    mentor: "Wellington Jalil",
    start: "14/07/2023 08:00",
    weekDay: new Date(2023, 6, 14, 8, 0, 0).getDay(),
  },
  {
    id: 2,
    status: "cancelled",
    title: "Decoração de festa",
    mentor: "Anabelle Regina",
    start: "18/5/2023 12:30",
    weekDay: new Date(2023, 4, 18, 12, 30, 0).getDay(),
  },
  {
    id: 3,
    status: "confirmed",
    title: "Serviço de fotogragia",
    mentor: "Patricia Bechelli",
    start: "09/09/2022 18:00",
    weekDay: new Date(2022, 8, 9, 18, 0, 0).getDay(),
  },
  {
    id: 4,
    status: "cancelled",
    title: "Cuidador de idosos",
    mentor: "Maju Coutinho",
    start: "07/03/2022 12:30",
    weekDay: new Date(2022, 2, 7, 12, 30, 0).getDay(),
  },
];

export { scheduleDAO };
