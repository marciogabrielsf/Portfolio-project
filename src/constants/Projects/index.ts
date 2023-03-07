import { ProjectTypes } from '@/pages/Projects/models';

export const ProjectsData:ProjectTypes[] = [
    {
        id: 0,
        title: 'Voucher CRUD App.',
        descriptionOne:'Uma aplicação desenvolvida no final de 2022 cujo o objetivo é organizar as finanças pessoais do meu pai, que é taxista e trabalha com vouchers.',
        descriptionTwo:'Foi desenvolvida utilizando Flutter no lado da aplicação junto ao NodeJS e MongoDB no lado do servidor.',
        githubLink: 'https://github.com/marciogabrielsf/Voucher-Crud-App'
    },
    {
        id: 1,
        title: 'Conversor de real para dólar.',
        descriptionOne:'Uma aplicação desenvolvida com o objetivo de estudar APIs e integrações.',
        descriptionTwo:'Desenvolvida utilizando NextJS e SASS.',
        githubLink: 'https://github.com/marciogabrielsf/real-to-dollar-NextJS'
    }
]