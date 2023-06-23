export interface ITags {
  id: number;
  name: string;
  image: string;
  mentors: number;
  classes: number;
}

export const Tags: ITags[] = [
  {
    id: 1,
    name: "Tecnologia da Informação",
    image:
      "https://tecnico.ulisboa.pt/files/2021/05/cientistas-do-tecnico-voltam-a-estar-em-destaque-no-ranking-dos-melhores-do-mundo-em-ciencias-da-computacao-1140x641.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 2,
    name: "Educação: Física aplicada",
    image:
      "https://conhecimentocientifico.com/wp-content/uploads/2020/04/o-que-e-fisica-conceito-ramos.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 3,
    name: "Direito",
    image: "https://uniandrade.br/wp-content/uploads/2017/09/direito.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 4,
    name: "Engenharia",
    image:
      "https://www.yiva.be/productcategory/image/2149/607560ofb4a-jpg?optimize=True",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 5,
    name: "Saúde",
    image:
      "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/10/medicina.jpg?quality=100&strip=info&w=680&h=260&crop=1",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 6,
    name: "Ciências Biológicas",
    image:
      "https://www.ufmg.br/ead/wp-content/uploads/biologia-monitoria-626x381.png",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 7,
    name: "Educação: Matemática",
    image:
      "https://www.ibilce.unesp.br/Home/Departamentos/Matematica/PET2/matematica_enem.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 8,
    name: "Pesquisa de campo",
    image:
      "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2012/05/geografia.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 9,
    name: "Gastronomia",
    image:
      "https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2018/11/shutterstock_792682891.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 10,
    name: "Tradutor",
    image:
      "https://multivix.edu.br/wp-content/uploads/2019/03/estudar-letras.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 11,
    name: "Analista financeiro",
    image:
      "http://academico.unifal-mg.edu.br/sitecurso/arquivositecurso.php?arquivoId=38",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 12,
    name: "Educação: Filosofia",
    image:
      "https://vestibular1.com.br/wp-content/uploads/2015/07/carreirasfilosofiabacharelado.jpg",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
  {
    id: 13,
    name: "Engenheiro Químico",
    image:
      "https://cdn.wizard.com.br/wp-content/uploads/2020/10/14195548/business-english-os-principais-termos-de-quimica-em-ingles.png",
    mentors: Math.floor(Math.random() * 90),
    classes: Math.floor(Math.random() * 599),
  },
];
