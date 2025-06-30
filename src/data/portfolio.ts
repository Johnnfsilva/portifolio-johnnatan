
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
    title: "Sistema de Gestão Empresarial",
    summary: "Plataforma completa para gestão de processos empresariais com dashboards interativos.",
    description: "Sistema robusto desenvolvido para otimizar processos empresariais, incluindo gestão de vendas, estoque, financeiro e recursos humanos. Implementa dashboards em tempo real com métricas avançadas e relatórios personalizáveis.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    media: [
      {
        id: "1",
        type: "image",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        alt: "Dashboard do sistema"
      },
      {
        id: "2", 
        type: "image",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "Interface de relatórios"
      }
    ],
    link: "https://exemplo.com",
    github: "https://github.com/johnnfsilva/sistema-gestao",
    createdAt: new Date("2024-01-15")
  },
  {
    id: "2",
    title: "App Mobile E-commerce",
    summary: "Aplicativo mobile completo para vendas online com integração de pagamentos.",
    description: "Aplicativo mobile nativo desenvolvido para iOS e Android, oferecendo experiência completa de e-commerce com catálogo de produtos, carrinho de compras, múltiplas formas de pagamento e acompanhamento de pedidos em tempo real.",
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    media: [
      {
        id: "3",
        type: "image", 
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        alt: "Interface do app mobile"
      }
    ],
    link: "https://exemplo-app.com",
    createdAt: new Date("2024-03-20")
  },
  {
    id: "3",
    title: "Plataforma de Análise de Dados",
    summary: "Ferramenta de BI para análise avançada de dados empresariais.",
    description: "Plataforma de Business Intelligence que processa grandes volumes de dados empresariais, gerando insights automatizados através de machine learning e apresentando resultados em dashboards interativos e relatórios personalizados.",
    technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "Pandas"],
    media: [
      {
        id: "4",
        type: "image",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "Dashboard de análise"
      },
      {
        id: "5",
        type: "image",
        url: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=600&fit=crop", 
        alt: "Gráficos e métricas"
      }
    ],
    github: "https://github.com/johnnfsilva/analytics-platform",
    createdAt: new Date("2024-02-10")
  }
];
