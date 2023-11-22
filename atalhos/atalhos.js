var textopraserlido = undefined;
let section;

$(document).keydown(function (e) 
{
    if (e.keyCode == 49 && e.altKey) 
    {   
      textopraserlido="O curso PROEJA - Técnico em informática para internet integrado ao Ensino Médio na modalidade educação de jovens e adultos do campus Cubatão é um CURSO TÉCNICO, com duração de três anos, realizado no período noturno, para pessoas maiores de 18 anos. Um curso preocupado com a formação integral do estudante e que respeita as especificidades do seu público-alvo.";
      section = document.getElementById('cont1');
      
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });

    }
    if(e.keyCode==50 && e.altKey)
    {
      textopraserlido="Um curso de informática com bases sólidas, sintonizado com os avanços das tecnologias da informação e comunicação para formar cidadãos e profissionais de nível técnico competentes para atuar no mundo do trabalho, responsáveis ética e politicamente, com elevado grau de responsabilidade social e que contemplem um perfil para saber, fazer e gerenciar atividades, visando aplicações na produção de bens, serviços e conhecimentos para a sociedade.";
      section = document.getElementById('cont2');
      
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });

    }
    if(e.keyCode==51 && e.altKey)
    {
      textopraserlido="Texto do Pop Up: Diferenciais - O curso PROEJA técnico em informática para internet integrado ao Ensino Médio do campus Cubatão atende requisitos de verticalização da rede Federal – o estudante realiza o Ensino Médio e pode prosseguir no mesmo campus para o nível superior no curso de Tecnologia em Análise de Sistema – ADS. campus Cubatão conta com laboratórios gerais de informática, laboratório de Inteligência artificial e Labmaker – uma estrutura física capas de suportar os mais diversos ambientes de desenvolvimento. O campus conta também com quadras e um ginásio poliesportivo o que possibilita a prática de atividades físicas, que aliás, acontecem no período noturno, integradas às demais disciplinas. Assim como nos demais cursos do campus Cubatão, as aulas são conduzidas por professores especializados – mestres e doutores, orientados por um currículo de referência para garantir a qualidade e identidade do curso. ";
      section = document.getElementById('abrirPopup1');
      
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });
    
    }
    if(e.keyCode==52 && e.altKey)
    {
      textopraserlido="";
      section = document.getElementById('#');
      
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });

    }
    if(e.keyCode==53 && e.altKey)
    {
      textopraserlido="";
      section = document.getElementById('#');
      
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });
    
    }
});
