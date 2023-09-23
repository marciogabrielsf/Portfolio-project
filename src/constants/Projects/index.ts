import { ProjectTypes } from "@/sections/Projects/models";

export const ProjectsData: ProjectTypes[] = [
	{
		id: 0,
		title: "Voucher Finances App.",
		descriptionOne:
			"De longe meu maior e mais desafiador projeto. Uma aplicação desenvolvida no final de 2022 cujo o objetivo é organizar as finanças pessoais do meu pai, que é taxista e trabalha com vouchers.",
		descriptionTwo:
			"Foi desenvolvida utilizando Flutter no lado da aplicação junto ao NodeJS e MongoDB no lado do servidor.",
		githubLink: "https://github.com/marciogabrielsf/Voucher-Crud-App",
	},
	{
		id: 1,
		title: "Cicabrev Landing Page.",
		descriptionOne:
			"Projeto desenvolvido para a Agência de inovação da Universidade Estadual do Ceará - UECE.",
		descriptionTwo:
			"A Landing page cicabrev foi desenvolvida para ajudar na participação de uma seleção de projetos inovadores da universidade para um financiamento.",
		githubLink: "https://github.com/marciogabrielsf/pomada-lp",
		projectSite: "https://cicabrev.vercel.app/",
	},
	{
		id: 2,
		title: "Excellent Google Ad Generator.",
		descriptionOne:
			"Uma aplicação desenvolvida com o intuito de economizar tempo do gestor de tráfego de uma concessionária.",
		descriptionTwo:
			"Desenvolvida utilizando NextJS e obtendo as informações do site utilizando Web Scraping.",
		githubLink: "https://github.com/marciogabrielsf/excelent-google-ads-generator",
		projectSite: "https://excelent-google-ads-generator.vercel.app/",
	},
	{
		id: 3,
		title: "Conversor de Real para Dólar.",
		descriptionOne: "Uma aplicação desenvolvida com o objetivo de estudar APIs e integrações.",
		descriptionTwo: "Desenvolvida utilizando NextJS e SASS.",
		githubLink: "https://github.com/marciogabrielsf/real-to-dollar-NextJS",
	},
];
