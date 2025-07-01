
import { Project, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  name: "Johnnatan Silva",
  title: "Analista Sênior | Automação de Fluxos Power Platform | Dados Estratégicos | Customer Success",
  email: "Johnnatan.silva@hotmail.com",
  phone: "+5513997557675",
  linkedin: "https://www.linkedin.com/in/johnnfsilva",
  photo: "/lovable-uploads/21a5e3bb-c171-455f-a6bf-056250e49b60.png",
  summary: "Analista de Informações Gerenciais Sênior com expertise em análise de dados e automação de processos. Especialista em Power BI, Power Automate e Power Apps, transformo dados complexos em insights estratégicos para otimizar decisões e fluxos de trabalho. Desenvolvo soluções escaláveis que promovem inovação e crescimento organizacional."
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestão SISCOSERV",
    summary: "Sistema para gestão do fluxo de registros no SISCOSERV com acompanhamento completo do processo.",
    description: "Desenvolvi um sistema para gestão do fluxo de registros no SISCOSERV. O sistema permitia acompanhamento do embarque desde a sua finalização e análise, até a total declaração do serviço e seu faturamento junto à Receita Federal.",
    technologies: ["VBA", "Excel", "Access", "SQL"],
    media: [
      {
        id: "1",
        type: "image",
        url: "/lovable-uploads/c01ce367-2a82-4c11-bb80-9d847b834f09.png",
        alt: "Interface do Sistema SISCOSERV"
      }
    ],
    createdAt: new Date("2022-01-15")
  },
  {
    id: "2",
    title: "Sistema de Gestão de Clientes",
    summary: "Sistema completo para gestão de clientes com foco em atendimentos e negociações.",
    description: "Desenvolvi para uma das empresas em que atuei, um sistema de gestão de clientes especialmente voltado para acompanhamento de histórico de atendimentos e negociações. O sistema permitia ainda a interação entre usuários e departamentos, além de fornecer indicadores gerenciais em tempo real.",
    technologies: ["VBA", "Excel", "Access", "SQL"],
    media: [
      {
        id: "2",
        type: "image",
        url: "/lovable-uploads/9e0d28fc-6dc7-40ba-89a5-867d85dc42d7.png",
        alt: "Tela de Registro de Atendimento"
      },
      {
        id: "3",
        type: "image",
        url: "/lovable-uploads/79259c4a-8748-49d6-936b-f273a9d6cd54.png",
        alt: "Dashboard de Gestão Comercial"
      }
    ],
    createdAt: new Date("2022-03-20")
  }
];
