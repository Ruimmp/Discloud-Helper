export default {
	header: {
		title: 'Discloud Helper',
		tools: {
			title: 'Ferramentas'
		}
	},
	footer: {
		allRightsReserved: 'Todos os direitos reservados',
		info: 'Este site não é afiliado oficialmente à'
	},
	landing: {
		welcome: {
			title: 'Bem-vindo ao Discloud Helper',
			description:
				'Ferramentas úteis para simplificar a configuração e o gerenciamento de suas aplicações na Discloud.'
		},
		functionalities: {
			title: 'Funcionalidades',
			tools: {
				configGenerator: {
					title: 'Gerador de discloud.config',
					description:
						'Crie facilmente o arquivo <code>discloud.config</code> para configurar seu bot ou site na Discloud.',
					button: 'Acessar Gerador'
				},
				comingSoon: {
					title: 'Em breve...',
					description:
						'Novas ferramentas estão em desenvolvimento para ajudá-lo a maximizar o uso da Discloud.'
				}
			}
		}
	},
	discloudConfig: {
		title: 'Configuração do Discloud',
		description: 'Gere o arquivo de configuração para Discloud de forma rápida e fácil.',
		ogTitle: 'Discloud Helper - Gerador de discloud.config',
		ogDescription: 'Gere o arquivo discloud.config para configurar sua aplicação na Discloud.',
		header: {
			title: 'Configuração do Discloud'
		},
		form: {
			appType: {
				label: 'Tipo de Aplicação'
			},
			appName: {
				label: 'Nome da Aplicação',
				placeholder: 'Digite o nome da aplicação',
				error: 'Você deve fornecer um nome para a aplicação.'
			},
			appMain: {
				label: 'Arquivo Principal',
				placeholder: 'Ex.: index.js ou src/index.js',
				error: {
					missingTitle: 'Arquivo principal ausente',
					missingDescription:
						'O arquivo principal é obrigatório. Esse arquivo é o ponto de entrada da aplicação (bot ou site).',
					invalidExtension: 'Tipo de arquivo inválido. Por favor, use uma extensão válida.',
					javaJar: 'Projetos em Java devem ser compilados em um arquivo .jar.',
					invalidJarName: 'Use apenas caracteres alfanuméricos (ex.: app.jar).'
				},
				examples: {
					title: 'Exemplos:',
					list: ['app.js', 'bot.py', 'server.php', 'main.rs'],
					javaNote: 'Arquivos Java devem ser compilados em'
				}
			},
			appAvatar: {
				label: 'URL do Avatar',
				placeholder: 'Digite a URL do avatar',
				error:
					'A URL do avatar deve ser válida e terminar com .png, .jpg ou .jpeg. Exemplo: https://i.imgur.com/zVC0jHl.png'
			},
			appRam: {
				label: 'RAM (em MB)',
				placeholder: 'RAM (em MB)',
				error: {
					site: 'A quantidade mínima de RAM para sites é {minRamSite} MB.',
					bot: 'A quantidade mínima de RAM para bots é {minRamBot} MB.'
				}
			},
			autorestart: {
				label: 'Reinício Automático',
				enabled: 'Ativado',
				disabled: 'Desativado',
				tooltip: 'Disponível a partir do ',
				linkText: 'Plano Platina',
				linkUrl: 'https://discloud.app/plans'
			},
			appVersion: {
				label: 'Versão',
				placeholder: {
					selectFile: 'Informe o arquivo principal para ver as versões disponíveis',
					invalidFile: 'Tipo de arquivo inválido'
				}
			},
			appApts: {
				label: 'Pacotes APT',
				info: 'Dependências'
			},
			downloadButton: 'Baixar Configuração',
			copyButton: 'Copiar',
			copySuccess: 'Copiado!',
			copyError: 'Erro ao copiar o conteúdo!'
		},
		preview: {
			title: 'discloud.config'
		}
	},
	errorPage: {
		title: 'Erro',
		description: 'Algo deu errado ao carregar a página.',
		messages: {
			404: 'Página não encontrada.',
			500: 'Erro interno do servidor.',
			403: 'Acesso negado. Você não tem permissão para acessar este recurso.',
			400: 'Requisição inválida. Verifique a URL ou os dados fornecidos.',
			default: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
		},
		instructions:
			'Se você acredita que isto é um erro, entre em contato com o suporte ou tente novamente.',
		button: 'Voltar para a Página Inicial'
	}
};
