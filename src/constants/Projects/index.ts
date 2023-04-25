import { ProjectTypes } from '@/pages/Projects/models';

export const ProjectsData:ProjectTypes[] = [
    {
        id: 0,
        title: 'Voucher Finances App.',
        descriptionOne:'De longe meu maior e mais desafiador projeto. Uma aplicação desenvolvida no final de 2022 cujo o objetivo é organizar as finanças pessoais do meu pai, que é taxista e trabalha com vouchers.',
        descriptionTwo:'Foi desenvolvida utilizando Flutter no lado da aplicação junto ao NodeJS e MongoDB no lado do servidor.',
        githubLink: 'https://github.com/marciogabrielsf/Voucher-Crud-App'
    },
    {
        id: 1,
        title: 'Conversor de Real para Dólar.',
        descriptionOne:'Uma aplicação desenvolvida com o objetivo de estudar APIs e integrações.',
        descriptionTwo:'Desenvolvida utilizando NextJS e SASS.',
        githubLink: 'https://github.com/marciogabrielsf/real-to-dollar-NextJS'
    },
    {
        id: 2,
        title: 'Excellent Google Ad Generator.',
        descriptionOne:'Uma aplicação desenvolvida com o intuito de economizar tempo do gestor de tráfego de uma concessionária.',
        descriptionTwo:'Desenvolvida utilizando NextJS e pegando as informações do site utilizando Web Scraping.',
        githubLink: 'https://github.com/marciogabrielsf/excelent-google-ads-generator'
    }
]