export default {
	header: {
		title: 'Discloud Helper',
		tools: {
			title: 'Outils'
		}
	},
	footer: {
		allRightsReserved: 'Tous droits réservés',
		info: "Ce site n'est pas affilié officiellement à"
	},
	landing: {
		welcome: {
			title: 'Bienvenue sur Discloud Helper',
			description:
				'Outils utiles pour simplifier la configuration et la gestion de vos applications sur Discloud.'
		},
		functionalities: {
			title: 'Fonctionnalités',
			tools: {
				configGenerator: {
					title: 'Générateur Discloud.config',
					description:
						'Créez facilement le fichier <code>discloud.config</code> pour configurer votre bot ou site sur Discloud.',
					button: 'Accéder au Générateur'
				},
				comingSoon: {
					title: 'Bientôt disponible...',
					description:
						'De nouveaux outils sont en cours de développement pour vous aider à maximiser votre utilisation de Discloud.'
				}
			}
		}
	},
	discloudConfig: {
		title: 'Configuration Discloud',
		description: 'Générez le fichier de configuration pour Discloud rapidement et facilement.',
		ogTitle: 'Discloud Helper - Générateur discloud.config',
		ogDescription:
			'Générez le fichier discloud.config pour configurer votre application sur Discloud.',
		header: {
			title: 'Configuration Discloud'
		},
		form: {
			appType: {
				label: "Type d'application"
			},
			appName: {
				label: "Nom de l'application",
				placeholder: "Entrez le nom de l'application",
				error: "Vous devez fournir un nom pour l'application."
			},
			appMain: {
				label: 'Fichier Principal',
				placeholder: 'ex. index.js ou src/index.js',
				error: {
					missingTitle: 'Fichier principal non fourni',
					missingDescription:
						"Le fichier principal est requis. Ce fichier est le point d'entrée pour l'application (bot ou site).",
					invalidExtension: 'Type de fichier invalide. Veuillez utiliser une extension valide.',
					javaJar: 'Les projets Java doivent être compilés en un fichier .jar.',
					invalidJarName: 'Utilisez uniquement des caractères alphanumériques (ex. app.jar).'
				},
				examples: {
					title: 'Exemples :',
					list: ['app.js', 'bot.py', 'server.php', 'main.rs'],
					javaNote: 'Les fichiers Java doivent être compilés en'
				}
			},
			appAvatar: {
				label: "URL de l'avatar",
				placeholder: "Entrez l'URL de l'avatar",
				error:
					"L'URL de l'avatar doit être valide et se terminer par .png, .jpg ou .jpeg. Exemple : https://i.imgur.com/zVC0jHl.png"
			},
			appRam: {
				label: 'RAM (en Mo)',
				placeholder: 'RAM (en Mo)',
				error: {
					site: 'La RAM minimale pour les sites est de {minRamSite} Mo.',
					bot: 'La RAM minimale pour les bots est de {minRamBot} Mo.'
				}
			},
			autorestart: {
				label: 'Redémarrage Automatique',
				enabled: 'Activé',
				disabled: 'Désactivé',
				tooltip: 'Disponible à partir du ',
				linkText: 'Plan Platinum',
				linkUrl: 'https://discloud.app/plans'
			},
			appVersion: {
				label: 'Version',
				placeholder: {
					selectFile: 'Fournissez le fichier principal pour voir les versions disponibles',
					invalidFile: 'Type de fichier invalide'
				}
			},
			appApts: {
				label: 'Paquets APT',
				info: 'Dépendances'
			},
			downloadButton: 'Télécharger la Configuration',
			copyButton: 'Copier',
			copySuccess: 'Copié !',
			copyError: 'Erreur lors de la copie du contenu !'
		},
		preview: {
			title: 'discloud.config'
		}
	},
	errorPage: {
		title: 'Erreur',
		description: 'Un problème est survenu lors du chargement de la page.',
		messages: {
			404: 'Page introuvable.',
			500: 'Erreur interne du serveur.',
			403: "Accès refusé. Vous n'avez pas la permission d'accéder à cette ressource.",
			400: "Requête invalide. Veuillez vérifier l'URL ou les données fournies.",
			default: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard."
		},
		instructions:
			"Si vous pensez qu'il s'agit d'une erreur, veuillez contacter le support ou réessayer.",
		button: "Retour à la Page d'Accueil"
	}
};
