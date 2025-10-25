export const projetos = [
  {
    id: 1,
    img: "/projetos/desktop.png",
    title: "Desktop",
    text: `O Desktop é um projeto que emula a interface do Windows 11, permitindo ao usuário explorar várias funcionalidades do sistema operacional. 
Atualmente, o projeto inclui: Calculadora, To-Do, Notepad, visualização de currículo e configurações de temas, plano de fundo e bloqueio de tela. 
Desenvolvido com React, TypeScript e Tailwind, o projeto prioriza interface limpa, animações suaves e navegação intuitiva, demonstrando domínio de boas práticas de frontend e componentização.

EXCLUSIVO PARA DESKTOPS.`,
    tecnologias: ["React", "TypeScript", "Tailwind"],
    tec_icons: [
      "/skills/react.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/Desktop",
  },
  {
    id: 2,
    img: "/projetos/backend.png",
    title: "Y-Backend",
    text: `Projeto desenvolvido com foco em Domain-Driven Design (DDD), estruturado em
módulos e camadas (domain, application/useCases, infrastructure).
O sistema utilizou interfaces e implementações, aplicando o princípio de Inversão de
Dependência para manter baixo acoplamento e facilitar a manutenção.
A arquitetura priorizou código limpo, escalabilidade e testabilidade, demonstrando
domínio de boas práticas avançadas de backend.`,
    tecnologias: ["Node.js", "TypeScript"],
    tec_icons: ["skills/nodejs.svg", "/skills/typescript.svg"],
    live: "https://github.com/MarcosFerreira2024/y-backend",
  },
  {
    id: 3,
    img: "/projetos/backend.png",
    title: "GameDatabase",
    text: `O GameDatabase é um projeto backend desenvolvido em Node.js e TypeScript,
    integrado à API externa IGDB. O sistema foi estruturado de forma modular,
    aplicando Programação Orientada a Objetos (POO), casos de uso (UseCases),
    interfaces e implementações, além do princípio de Inversão de Dependência.
    A arquitetura foi projetada para ser escalável, manutenível e de fácil expansão,
    servindo como base sólida para futuras integrações com clientes web ou mobile.`,
    tecnologias: ["Node.js", "TypeScript"],
    tec_icons: ["/skills/nodejs.svg", "/skills/typescript.svg"],
    live: "https://github.com/MarcosFerreira2024/gamedatabase_backend",
  },
  {
    id: 4,
    img: "/projetos/burnout.png",
    title: "Burnout",
    text: `O Burnout é uma plataforma de eCommerce moderna 
        desenvolvida para oferecer uma experiência de compra rápida, 
        intuitiva e responsiva. Construído com React, Next.js, Tailwind, 
        TypeScript e JavaScript, o projeto une o que há de mais recente em tecnologia web para entregar
         alta performance e design minimalista.`,
    tecnologias: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js"],
    tec_icons: [
      "/skills/react.svg",
      "/skills/nextjs.svg",
      "/skills/tailwind.svg",
      "/skills/typescript.svg",
      "skills/nodejs.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/Burnout",
  },
  {
    id: 5,
    img: "/projetos/unifeso.png",
    title: "Agenda NAF ",
    text: `A Agenda NAF UNIFESO é uma plataforma digital 
        desenvolvida para facilitar o agendamento de atendimentos 
        no Núcleo de Apoio Contábil e Fiscal (NAF) do Centro Universitário UNIFESO.
         Criada com foco em praticidade, organização e acessibilidade, a ferramenta moderniza a gestão de horários e 
        oferece uma experiência simples e eficiente tanto para alunos quanto para a comunidade.`,
    tecnologias: ["React", "Tailwind", "TypeScript"],
    tec_icons: [
      "/skills/react.svg",
      "/skills/tailwind.svg",
      "/skills/typescript.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/Projeto-Unifeso",
  },
  {
    id: 6,
    img: "/projetos/awax.png",
    title: "Awax",
    text: `O Awax é um projeto focado em demonstrar habilidades práticas de desenvolvimento frontend utilizando HTML e CSS3.
         A proposta é criar uma landing page moderna, responsiva e visualmente atraente,
         aplicando conceitos fundamentais de estruturação de páginas web e estilização profissional.`,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    tec_icons: [
      "/skills/html.svg",
      "/skills/css.svg",
      "/skills/javascript.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/Projeto-Awax",
  },
  {
    id: 7,
    img: "/projetos/b7-burguer.png",
    title: "B7-Burguer",
    text: `O B7-Burguer é uma landing page desenvolvida para promover e 
        vender hambúrgueres artesanais de forma direta e impactante. 
        Criado utilizando HTML e CSS3, 
        o projeto foca em apresentar o produto de maneira apetitosa, 
        com um design moderno, responsivo e voltado para conversão.`,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    tec_icons: [
      "/skills/html.svg",
      "/skills/css.svg",
      "/skills/javascript.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/B7-Burguer",
  },
  {
    id: 8,
    img: "/projetos/portfolio2.png",
    title: "Portfolio 2025",
    text: `Este portfólio foi desenvolvido utilizando Next para a estrutura do projeto e React no frontend, focando na construção de um ambiente moderno e organizado para a apresentação de projetos e habilidades.
Atualmente, o projeto está concentrado no frontend, utilizando o Next como base de organização (estrutura e rotas básicas), mas sem lógica de backend implementada ainda.
O layout é limpo, responsivo e pensado para facilitar a navegação e visualização de informações de maneira prática.`,
    tecnologias: ["React", "Next.js", "Tailwind"],
    tec_icons: [
      "/skills/react.svg",
      "/skills/nextjs.svg",
      "/skills/tailwind.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/meu-portfolio",
  },
  {
    id: 9,
    img: "/projetos/portfolio1.png",
    title: "Portfolio Next.js",
    text: "Este portfólio foi desenvolvido utilizando Next.js, TypeScript e Tailwind, focando em performance, responsividade e experiência de usuário.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind"],
    tec_icons: [
      "/skills/nextjs.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
    ],
    live: "https://github.com/MarcosFerreira2024/portfolio",
  },
];

export const qntdProjetos = projetos.length;
