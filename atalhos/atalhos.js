var textopraserlido = undefined;
let section;

$(document).keydown(function (e) 
{
    if (e.keyCode == 49 && e.altKey) 
    {  
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="O curso PROEJA - Técnico em informática para internet integrado ao Ensino Médio na modalidade educação de jovens e adultos do campus Cubatão é um CURSO TÉCNICO, com duração de três anos, realizado no período noturno, para pessoas maiores de 18 anos. Um curso preocupado com a formação integral do estudante e que respeita as especificidades do seu público-alvo."; break;
        case 'es-ES': textopraserlido="El curso PROEJA - Técnico en informática para internet integrado con la enseñanza secundaria en la modalidad de educación de jóvenes y adultos en el campus de Cubatão es un CURSO TÉCNICO, de tres años de duración, impartido en horario vespertino, para mayores de 18 años. Es un curso preocupado por la formación integral del alumno y que respeta las especificidades de su público objetivo."; break;
        case 'en': textopraserlido="The PROEJA - Technical course in internet computing integrated with secondary education in the form of youth and adult education at the Cubatão campus is a TECHNICAL COURSE, lasting three years, held in the evening, for people over 18 years of age. It is a course concerned with the student's comprehensive education and which respects the specific characteristics of its target audience."; break;
      }
      section = document.getElementById('cont1');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });

    }
    if(e.keyCode==50 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="Um curso de informática com bases sólidas, sintonizado com os avanços das tecnologias da informação e comunicação para formar cidadãos e profissionais de nível técnico competentes para atuar no mundo do trabalho, responsáveis ética e politicamente, com elevado grau de responsabilidade social e que contemplem um perfil para saber, fazer e gerenciar atividades, visando aplicações na produção de bens, serviços e conhecimentos para a sociedade."; break;
        case 'es-ES': textopraserlido="Una carrera de informática con bases sólidas, en sintonía con los avances de las tecnologías de la información y la comunicación para formar ciudadanos y profesionales de nivel técnico competentes para actuar en el mundo del trabajo, ética y políticamente responsables, con alto grado de responsabilidad social y que incluyan un perfil para conocer, hacer y gestionar actividades, con vistas a aplicaciones en la producción de bienes, servicios y conocimiento para la sociedad."; break;
        case 'en': textopraserlido="A computer science course with solid foundations, attuned to advances in information and communication technologies to train citizens and professionals at technical level who are competent to act in the world of work, ethically and politically responsible, with a high degree of social responsibility and who include a profile for knowing, doing and manage activities, with a view to applications in the production of goods, services and knowledge for society. for society."; break;
      }
      section = document.getElementById('cont2');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });

    }
    if(e.keyCode==51 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="Diferenciais: O curso PROEJA técnico em informática para internet integrado ao Ensino Médio do campus Cubatão atende requisitos de verticalização da rede Federal – o estudante realiza o Ensino Médio e pode prosseguir no mesmo campus para o nível superior no curso de Tecnologia em Análise de Sistema – ADS. O Campus Cubatão conta com laboratórios gerais de informática, laboratório de Inteligência artificial e Labmaker – uma estrutura física capas de suportar os mais diversos ambientes de desenvolvimento. O campus conta também com quadras e um ginásio poliesportivo o que possibilita a prática de atividades físicas, que aliás, acontecem no período noturno, integradas às demais disciplinas. Assim como nos demais cursos do campus Cubatão, as aulas são conduzidas por professores especializados – mestres e doutores, orientados por um currículo de referência para garantir a qualidade e identidade do curso."; break;
        case 'es-ES': textopraserlido="Diferenciales: O curso PROEJA técnico em informática para internet integrado ao Ensino Médio do campus Cubatão atende requisitos de verticalização da rede Federal – o estudante realiza o Ensino Médio e pode prosseguir no mesmo campus para o nível superior no curso de Tecnologia em Análise de Sistema – ADS. El campus de Cubatão cuenta con laboratorios de informática general, un laboratorio de inteligencia artificial y un Labmaker - una estructura física capaz de soportar los más diversos ambientes de desarrollo. O campus conta também com quadras e um ginásio poliesportivo o que possibilita a prática de atividades físicas, que aliás, acontecem no período noturno, integradas às demais disciplinas. Como en los demás cursos del campus de Cubatão, las clases son dirigidas por profesores especializados - maestros y doctores, orientados por un currículo de referencia para garantizar la calidad e identidad del curso."; break;
        case 'en': textopraserlido="Differentials: The PROEJA technical course in computer science for the internet integrated with high school at the Cubatão campus meets the requirements for verticalization of the federal network - the student completes high school and can continue on the same campus to higher education in the Technology in System Analysis - ADS course. The Cubatão Campus has general computer labs, an artificial intelligence lab and a Labmaker - a physical structure capable of supporting the most diverse development environments. The campus also has courts and a multi-sports gymnasium, which makes it possible to practise physical activities, which in fact take place in the evening, integrated with the other disciplines. As with the other courses at the Cubatão campus, classes are conducted by specialized teachers - masters and doctors, guided by a reference curriculum to guarantee the quality and identity of the course."; break;
      }
      section = document.getElementById('abrirPopup1');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });
    
    }
    if(e.keyCode==52 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="Ingressar: o texto irá ficar aqui."; break;
        case 'es-ES': textopraserlido="Entre: el texto se quedará aquí."; break;
        case 'en': textopraserlido="Get in: the text will be here."; break;
      }
      section = document.getElementById('abrirPopup2');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });
    
    }
    if(e.keyCode==53 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="PROEJA: o texto irá ficar aqui."; break;
        case 'es-ES': textopraserlido="PROEJA: el texto se quedará aquí."; break;
        case 'en': textopraserlido="PROEJA: el texto se quedará aquí."; break;
      }
      section = document.getElementById('abrirPopup3');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });
    
    }
    if(e.keyCode==54 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="Descrição: o texto irá ficar aqui."; break;
        case 'es-ES': textopraserlido="Descrição: el texto se quedará aquí."; break;
        case 'en': textopraserlido="Descrição: el texto se quedará aquí."; break;
      }
      section = document.getElementById('abrirPopup4');
      
      window.scrollTo({
        top: section.offsetTop + 1000,
        behavior: "smooth"
      });
    
    }
    if(e.keyCode==55 && e.altKey)
    {
      switch(document.documentElement.lang){
        case 'pt-br': textopraserlido="Depoimentos."; break;
        case 'es-ES': textopraserlido="Opiniones."; break;
        case 'en': textopraserlido="Depoiments."; break;
      }
      section = document.querySelector('.depoimentos');
      
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });

    }
});
