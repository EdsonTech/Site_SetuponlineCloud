import { Cloud, Shield, Cpu, Users, Server, Code, Database, Network, GitBranch, Lock } from 'lucide-react';

export const services = [
  {
    icon: Server,
    title: 'Infraestrutura de TI',
    description: 'Soluções completas em infraestrutura, servidores, redes e suporte técnico especializado.',
    features: [
      'Servidores Dell EMC',
      'Storage Enterprise',
      'Virtualização VMware',
      'Backup e Replicação',
      'Monitoramento 24x7'
    ],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Migração e gerenciamento de serviços em nuvem, garantindo segurança e disponibilidade.',
    features: [
      'Microsoft Azure',
      'AWS',
      'Private Cloud',
      'Backup em Nuvem',
      'Disaster Recovery'
    ],
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: GitBranch,
    title: 'Locação de Equipe DevOps',
    description: 'Profissionais especializados em práticas DevOps para acelerar sua entrega de software.',
    features: [
      'CI/CD Pipeline',
      'Automação de Infraestrutura',
      'Containerização',
      'Monitoramento e Logging',
      'Cloud Native Development'
    ],
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Lock,
    title: 'Equipe DevSecOps',
    description: 'Integração de segurança no ciclo de desenvolvimento e operações.',
    features: [
      'Security as Code',
      'Análise de Vulnerabilidades',
      'Compliance Automation',
      'Security Testing',
      'Incident Response'
    ],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção contra ameaças, backup em nuvem e políticas de segurança.',
    features: [
      'Firewall UTM',
      'Email Security',
      'Endpoint Protection',
      'SOC as a Service',
      'Conformidade LGPD'
    ],
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Network,
    title: 'Redes',
    description: 'Projeto e implementação de redes corporativas seguras e eficientes.',
    features: [
      'SD-WAN',
      'MPLS',
      'VPN Corporativa',
      'Wi-Fi Empresarial',
      'Monitoramento'
    ],
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Desenvolvimento de sistemas, sites e aplicativos personalizados para sua empresa.',
    features: [
      'Sistemas Web',
      'Aplicativos Mobile',
      'APIs',
      'Integrações',
      'Automação'
    ],
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Administração, otimização e manutenção de bancos de dados empresariais.',
    features: [
      'SQL Server',
      'Oracle',
      'PostgreSQL',
      'MongoDB',
      'Redis'
    ],
    gradient: 'from-yellow-500 to-yellow-600'
  }
];