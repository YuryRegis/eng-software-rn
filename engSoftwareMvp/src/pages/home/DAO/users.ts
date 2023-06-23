// Data Access Object - DAO
// This file contains the data access object for the mocked users.

export interface IUser {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
  password: string;
  role: "ALN" | "PRF";
  course: string;
  profileDescription: string;
  tags: any[];
  status: "online" | "offline" | "busy";
  isActive: boolean;
}
export const roles = ["PRF", "ALN"];

export const users: IUser[] = [
  {
    id: 1,
    fullName: "João Doe",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/31.jpg",
    email: "aluno@sga.pucminas.br",
    password: "123456",
    role: "ALN",
    course: "Dentista",
    profileDescription:
      "A dor em si é o amor da dor, os principais problemas ecológicos, mas eu dou esse tipo de tempo para cair, de modo que alguma grande dor e dor. Com o objetivo de chegar ao mínimo, quem de nós deve exercer qualquer emprego, exceto para tirar proveito das consequências dele.",
    tags: ["Canal", "Cárie (limpeza)", "Periodontia", "Extração"],
    status: "online",
    isActive: true,
  },
  {
    id: 2,
    fullName: "Jonas Alves Avelar",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    email: "professor@pucpcaldas.br",
    password: "123456",
    role: "PRF",
    course: "Técnico em Informática",
    profileDescription:
      "A dor em si é o amor da dor, os principais problemas ecológicos, mas eu dou esse tipo de tempo para cair, de modo que alguma grande dor e dor. Com o objetivo de chegar ao mínimo, quem de nós deve exercer qualquer emprego, exceto para tirar proveito das consequências dele.",
    tags: ["Formatação", "Montagem", "Manutenção"],
    status: "offline",
    isActive: true,
  },
  {
    id: 3,
    fullName: "José Francisco Gabriel Rafael",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
    email: "josefran@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Arquiteto",
    profileDescription:
      "Com o objetivo de chegar ao mínimo, quem de nós deve exercer qualquer emprego, exceto para tirar proveito das consequências dele. A dor em si é o amor da dor, os principais problemas ecológicos, mas eu dou esse tipo de tempo para cair, de modo que alguma grande dor e dor.",
    tags: ["Cálculo", "Resistência dos Materiais", "Estruturas de Concreto"],
    status: "busy",
    isActive: true,
  },
  {
    id: 4,
    fullName: "Fábio Henrique Souza",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    email: "fabao@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Professor",
    profileDescription:
      "Mas para que compreendais de onde vem todo erro nascido o prazer de acusar e elogiar a dor, abrirei todo o assunto e explicarei as mesmas coisas que foram ditas por aquele inventor da verdade e por assim dizer o arquiteto da a vida abençoada.",
    tags: ["Cálculo", "Estatística", "Física", "Química"],
    status: "online",
    isActive: true,
  },
  {
    id: 5,
    fullName: "Lenara Machado",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg",
    email: "lenara_genteboa@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Advogada",
    profileDescription:
      "Pois ninguém rejeita, ou odeia, ou evita o prazer, porque é o próprio prazer, mas porque grandes dores resultam de quem não sabe seguir o prazer pela razão.",
    tags: ["Direito Constitucional", "Direito Tributário", "Trabalhista"],
    status: "online",
    isActive: true,
  },
  {
    id: 6,
    fullName: "Josiane Franco Nascimento",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg",
    email: "josifrannasc@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Técnico Administrtivo",
    profileDescription:
      "Além disso, não há ninguém que deseje obter a dor, porque a própria dor é amor, intensificado, e deseja adquiri-la, mas porque não ocorrem tempos de tal natureza, para que pelo trabalho e pela dor possa buscar algum grande prazer.",
    tags: [
      "Mentoria",
      "Administração de Empresas",
      "Gestão de Estoque",
      "Fluxo de caixa",
    ],
    status: "offline",
    isActive: true,
  },
  {
    id: 7,
    fullName: "Alfredo Rollo",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
    email: "rollo_alf@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Professor",
    profileDescription:
      "Pois para que venha o mínimo, qualquer um de nós realiza qualquer exercício físico laborioso, exceto para obter alguma vantagem dele.",
    tags: ["Redação", "Gramática"],
    status: "busy",
    isActive: true,
  },
  {
    id: 8,
    fullName: "Silvia D'llores",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    email: "deloreans@fafifo.edu.net",
    password: "123jonas",
    role: "PRF",
    course: "Massagista",
    profileDescription:
      "E quem pode condenar com justiça aquele que deseja estar nesse prazer ao invés de obter nenhum aborrecimento.",
    tags: ["Acumputura", "Massagem", "Drenagem Linfática", "Reflexologia"],
    status: "online",
    isActive: true,
  },
];
