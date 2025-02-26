export default {
  name: 'Português',
  header: {
    title: 'Discloud Helper',
    tools: {
      title: 'Ferramentas',
    },
  },
  footer: {
    allRightsReserved: 'Todos os direitos reservados',
    info: 'Este site não é afiliado oficialmente à',
  },
  landing: {
    welcome: {
      title: 'Bem-vindo ao Discloud Helper',
      description:
        'Ferramentas úteis para simplificar a configuração e o gerenciamento de suas aplicações na Discloud.',
    },
    functionalities: {
      title: 'Funcionalidades',
      tools: {
        configGenerator: {
          title: 'Gerador de discloud.config',
          description:
            'Crie facilmente o arquivo <code>discloud.config</code> para configurar seu bot ou site na Discloud.',
          button: 'Acessar Gerador',
        },
        generateDiscordApplicationInvite: {
          title: 'Link de Convite de Bot Discord',
          description:
            'Gere um link de convite para o seu bot do Discord com escopos e permissões personalizáveis.',
          button: 'Acessar Formulário',
        },
        comingSoon: {
          title: 'Em breve...',
          description:
            'Novas ferramentas estão em desenvolvimento para ajudá-lo a maximizar o uso da Discloud.',
        },
      },
    },
  },
  discloudConfig: {
    title: 'Configuração do Discloud',
    description:
      'Gere o arquivo de configuração para Discloud de forma rápida e fácil.',
    ogTitle: 'Discloud Helper - Gerador de discloud.config',
    ogDescription:
      'Gere o arquivo discloud.config para configurar sua aplicação na Discloud.',
    header: {
      title: 'discloud.config',
    },
    form: {
      appType: {
        label: 'Tipo de Aplicação',
      },
      appName: {
        label: 'Nome da Aplicação',
        placeholder: 'Digite o nome da aplicação',
        error: 'Você deve fornecer um nome para a aplicação.',
      },
      appId: {
        label: 'ID (Subdomínio)',
        placeholder: 'Insira o nome do seu subdomínio',
        warningMessage: "'discloud.app' não é necessário.",
        error: 'Você deve fornecer um ID para a aplicação.',
      },
      appMain: {
        label: 'Arquivo Principal',
        placeholder: 'Ex.: index.js ou src/index.js',
        error: {
          missingTitle: 'Arquivo principal ausente',
          missingDescription:
            'O arquivo principal é obrigatório. Esse arquivo é o ponto de entrada da aplicação (bot ou site).',
          invalidExtension:
            'Tipo de arquivo inválido. Por favor, use uma extensão válida.',
          javaJar: 'Projetos em Java devem ser compilados em um arquivo .jar.',
          invalidJarName: 'Use apenas caracteres alfanuméricos (ex.: app.jar).',
        },
        examples: {
          title: 'Exemplos:',
          list: ['app.js', 'bot.py', 'server.php', 'main.rs'],
          javaNote: 'Arquivos Java devem ser compilados em',
        },
      },
      appAvatar: {
        label: 'URL do Avatar',
        placeholder: 'Digite a URL do avatar',
        error:
          'A URL do avatar deve ser válida e terminar com .png, .jpg ou .jpeg. Exemplo: https://i.imgur.com/zVC0jHl.png',
      },
      appRam: {
        label: 'RAM (em MB)',
        placeholder: 'RAM (em MB)',
        error: {
          site: 'A quantidade mínima de RAM para sites é {minRamSite} MB.',
          bot: 'A quantidade mínima de RAM para bots é {minRamBot} MB.',
        },
      },
      autorestart: {
        label: 'Reinício Automático',
        enabled: 'Ativado',
        disabled: 'Desativado',
        tooltip: 'Disponível a partir do ',
        linkText: 'Plano Platina',
        linkUrl: 'https://discloud.app/plans',
      },
      appVersion: {
        label: 'Versão',
        placeholder: {
          selectFile:
            'Informe o arquivo principal para ver as versões disponíveis',
          invalidFile: 'Tipo de arquivo inválido',
        },
      },
      appApts: {
        label: 'Pacotes APT',
        info: 'Dependências',
      },
      downloadButton: 'Baixar Configuração',
      copyButton: 'Copiar',
      copySuccess: 'Copiado!',
      copyError: 'Erro ao copiar o conteúdo!',
    },
    preview: {
      title: 'discloud.config',
    },
  },
  botInvite: {
    title: 'Link de Convite de Bot Discord',
    guide: {
      title: 'Como obter o link do seu bot?',
      step1: 'Vá para o ',
      step2: 'Selecione a aplicação do seu bot.',
      step3: 'Copie o ID do Client (bot) na seção "Informações Gerais".',
      step4: 'Cole-o abaixo e configure os escopos e permissões.',
      step5: 'Copie o link de convite gerado e compartilhe-o!',
    },
    input: {
      clientId: 'ID do Client (bot)',
      placeholder: 'Insira o seu ID do Client (bot)',
      error: 'Por favor, insira um ID do Client (bot).',
    },
    scopes: {
      title: 'Escopos',
      options: {
        bot: {
          label: 'Bot',
          description: 'Adicione o bot ao servidor com permissões.',
        },
        commands: {
          label: 'Comandos de Aplicação',
          description: 'Ativa os comandos de barra (slash commands).',
        },
        identify: {
          label: 'Identificar',
          description: 'Identifica o usuário que está autorizando o app.',
        },
        guilds: {
          label: 'Servidores',
          description: 'Acessa informações dos servidores do usuário.',
        },
      },
    },
    permissions: {
      title: 'Permissões',
      main: {
        admin: {
          label: 'Administrador',
          description: 'Acesso total ao servidor.',
        },
        sendMessages: {
          label: 'Enviar Mensagens',
          description: 'Enviar mensagens no chat.',
        },
        connect: {
          label: 'Conectar',
          description: 'Conectar-se a canais de voz.',
        },
        speak: {
          label: 'Falar',
          description: 'Falar nos canais de voz.',
        },
      },
      additional: {
        title: 'Permissões Adicionais',
        general: {
          title: 'Geral',
          auditLog: {
            label: 'Visualizar Log de Auditoria',
            description: 'Visualiza o log de auditoria do servidor.',
          },
          manageServer: {
            label: 'Gerenciar Servidor',
            description: 'Gerencia as configurações do servidor.',
          },
          manageRoles: {
            label: 'Gerenciar Cargos',
            description: 'Gerencia os cargos do servidor.',
          },
          manageChannels: {
            label: 'Gerenciar Canais',
            description: 'Gerencia os canais do servidor.',
          },
          kickMembers: {
            label: 'Expulsar Membros',
            description: 'Expulsa membros do servidor.',
          },
          banMembers: {
            label: 'Banir Membros',
            description: 'Bane membros do servidor.',
          },
          createInstantInvite: {
            label: 'Criar Convite Instantâneo',
            description: 'Cria um link de convite instantâneo.',
          },
          changeNickname: {
            label: 'Mudar Apelido',
            description: 'Mudar o seu apelido.',
          },
          manageNicknames: {
            label: 'Gerenciar Apelidos',
            description: 'Gerencia os apelidos no servidor.',
          },
          manageExpressions: {
            label: 'Gerenciar Expressões',
            description: 'Gerencia expressões do servidor.',
          },
          createExpressions: {
            label: 'Criar Expressões',
            description: 'Cria expressões no servidor.',
          },
          manageWebhooks: {
            label: 'Gerenciar Webhooks',
            description: 'Gerencia os webhooks do servidor.',
          },
          viewChannels: {
            label: 'Visualizar Canais',
            description: 'Visualiza os canais do servidor.',
          },
          manageEvents: {
            label: 'Gerenciar Eventos',
            description: 'Gerencia eventos do servidor.',
          },
          createEvents: {
            label: 'Criar Eventos',
            description: 'Cria eventos no servidor.',
          },
          moderateMembers: {
            label: 'Moderar Membros',
            description: 'Modera membros do servidor.',
          },
          viewServerInsights: {
            label: 'Visualizar Insights do Servidor',
            description: 'Visualiza as estatísticas do servidor.',
          },
          viewServerSubscriptionInsights: {
            label: 'Visualizar Assinaturas do Servidor',
            description:
              'Visualiza as estatísticas das assinaturas do servidor.',
          },
        },
        text: {
          title: 'Texto',
          createPublicThreads: {
            label: 'Criar Tópicos Públicos',
            description: 'Cria tópicos públicos.',
          },
          createPrivateThreads: {
            label: 'Criar Tópicos Privados',
            description: 'Cria tópicos privados.',
          },
          sendMessagesInThreads: {
            label: 'Enviar Mensagens em Tópicos',
            description: 'Envia mensagens nos tópicos.',
          },
          manageMessages: {
            label: 'Gerenciar Mensagens',
            description: 'Gerencia mensagens.',
          },
          sendTTSMessages: {
            label: 'Enviar Mensagens TTS',
            description: 'Envia mensagens em texto-para-voz (TTS).',
          },
          manageThreads: {
            label: 'Gerenciar Tópicos',
            description: 'Gerencia tópicos.',
          },
          embedLinks: {
            label: 'Incorporar Links',
            description: 'Incorpora links nas mensagens.',
          },
          attachFiles: {
            label: 'Anexar Arquivos',
            description: 'Anexa arquivos às mensagens.',
          },
          readMessageHistory: {
            label: 'Ler Histórico de Mensagens',
            description: 'Lê o histórico de mensagens.',
          },
          mentionEveryone: {
            label: 'Mencionar Todos',
            description: 'Menciona todos no servidor.',
          },
          useExternalEmojis: {
            label: 'Usar Emojis Externos',
            description: 'Usa emojis externos.',
          },
          useExternalStickers: {
            label: 'Usar Figurinhas Externas',
            description: 'Usa figurinhas externas.',
          },
          addReactions: {
            label: 'Adicionar Reações',
            description: 'Adiciona reações às mensagens.',
          },
          useSlashCommands: {
            label: 'Usar Comandos Slash',
            description: 'Usa comandos de barra.',
          },
          useEmbeddedActivities: {
            label: 'Usar Atividades Incorporadas',
            description: 'Usa atividades incorporadas.',
          },
          useExternalApps: {
            label: 'Usar Aplicações Externas',
            description: 'Usa aplicações externas.',
          },
          createPolls: {
            label: 'Criar Enquetes',
            description: 'Cria enquetes no servidor.',
          },
        },
        voice: {
          title: 'Voz',
          video: {
            label: 'Vídeo',
            description: 'Ativa o vídeo.',
          },
          muteMembers: {
            label: 'Silenciar Membros',
            description: 'Silencia membros nos canais de voz.',
          },
          deafenMembers: {
            label: 'Ensurdecer Membros',
            description: 'Ensurdece membros nos canais de voz.',
          },
          moveMembers: {
            label: 'Mover Membros',
            description: 'Move membros entre canais de voz.',
          },
          useVoiceActivity: {
            label: 'Usar Atividade de Voz',
            description: 'Usa atividade de voz para falar.',
          },
          prioritySpeaker: {
            label: 'Orador Prioritário',
            description: 'Concede prioridade de fala.',
          },
          requestToSpeak: {
            label: 'Solicitar Fala',
            description: 'Solicita a fala nos canais.',
          },
          useEmbeddedActivities: {
            label: 'Usar Atividades Incorporadas',
            description: 'Usa atividades incorporadas.',
          },
          useSoundboard: {
            label: 'Usar Mesa de Som',
            description: 'Usa a mesa de som.',
          },
          useExternalSounds: {
            label: 'Usar Sons Externos',
            description: 'Usa sons externos.',
          },
        },
      },
    },
    output: {
      title: 'Link de Convite Gerado',
      placeholder: 'Insira o ID do Client (bot) para gerar o link de convite.',
    },
    buttons: {
      copyButton: 'Copiar Link',
      copySuccess: 'Copiado!',
      copyError: 'Erro ao copiar o link!',
      enabled: 'Ativado',
      disabled: 'Desativado',
    },
  },
  errorPage: {
    title: 'Erro',
    description: 'Algo deu errado ao carregar a página.',
    messages: {
      404: 'Página não encontrada.',
      500: 'Erro interno do servidor.',
      403: 'Acesso negado. Você não tem permissão para acessar este recurso.',
      400: 'Requisição inválida. Verifique a URL ou os dados fornecidos.',
      default:
        'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    },
    instructions:
      'Se você acredita que isto é um erro, entre em contato com o suporte ou tente novamente.',
    button: 'Voltar para a Página Inicial',
  },
};
