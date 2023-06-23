export function getImageUrl(name: string): string {
  if (
    name.match(/\bbio|\bbact|\bavic|\bgenet|\bveter|\banim|\bmicrob|\becol/gi)
  ) {
    return `https://www.ufmg.br/ead/wp-content/uploads/biologia-monitoria-626x381.png`;
  } else if (name.match(/\bfís|\belet|\benerg/gi)) {
    return `https://conhecimentocientifico.com/wp-content/uploads/2020/04/o-que-e-fisica-conceito-ramos.jpg`;
  } else if (name.match(/\bmat|\bvetor|\bmadeir|\beng|\belétr|\bsolid/gi)) {
    return `https://www.yiva.be/productcategory/image/2149/607560ofb4a-jpg?optimize=True`;
  } else if (name.match(/\bquim|\bquím|\bpolím|\binorg|\borgân|\bresí/gi)) {
    return `https://cdn.wizard.com.br/wp-content/uploads/2020/10/14195548/business-english-os-principais-termos-de-quimica-em-ingles.png`;
  } else if (name.match(/\bmed|\bméd|\banatomia|\benferm|\bcardio/gi)) {
    return `https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/10/medicina.jpg?quality=100&strip=info&w=680&h=260&crop=1`;
  } else if (name.match(/\bdir|\btrab|\bpenal|\bcivil|\bjusti|\bconstit/gi)) {
    return `https://uniandrade.br/wp-content/uploads/2017/09/direito.jpg`;
  } else if (
    name.match(/\bcomp|\bdado|\bdata|\balgor|\bsoftw|\bhardw|\bprog|\binteli/gi)
  ) {
    return "https://tecnico.ulisboa.pt/files/2021/05/cientistas-do-tecnico-voltam-a-estar-em-destaque-no-ranking-dos-melhores-do-mundo-em-ciencias-da-computacao-1140x641.jpg";
  } else if (name.match(/\bpsic|\bterap|\bcomunic/gi)) {
    return "https://scabora.com.br/wp-content/blogs.dir/2/files/2020/06/psicossomatica-medicina.jpg";
  } else if (name.match(/\beconom|\bmercado|\bfinan\bextern/gi)) {
    return "https://vaidebolsa.com.br/wp-content/uploads/2019/10/como-e-o-curso-de-economia.jpg";
  } else if (name.match(/\barquit|\bmodel|\bdesenh/gi)) {
    return "https://img.imageboss.me/revista-cdn/cdn/40602/e79bc7a8124c63f4e380ee85f56bf554b4638c7e.jpg?1656450910";
  } else if (name.match(/\bmatem|\bcálc|\bálgeb|\bgeom|\bestatí/gi)) {
    return "https://www.ibilce.unesp.br/Home/Departamentos/Matematica/PET2/matematica_enem.jpg";
  } else if (name.match(/\binternac|\bpolít/gi)) {
    return "http://www.souzaaranhamachado.com.br/wp-content/uploads/2022/08/Rela%C3%A7%C3%B5es-Internacionais-1.jpg";
  } else if (name.match(/\bgeog|\bgeot|\bgeop/gi)) {
    return "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2012/05/geografia.jpg";
  } else if (name.match(/\brelig|\bfilos|\bantrop|\bsociol|\bintele/gi)) {
    return "https://vestibular1.com.br/wp-content/uploads/2015/07/carreirasfilosofiabacharelado.jpg";
  }
  return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ0rs_nKP4icWtuaS1ZEgHJTvMzTPRdYLC7-JDFRpbK2vFwqeDfr4rpvrOzykyiHUiec&usqp=CAU`;
}
