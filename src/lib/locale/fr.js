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
				generateDiscordApplicationInvite: {
					title: "Lien d'invitation d'un bot Discord",
					description:
						"Générez un lien d'invitation pour votre application Discord avec des portées et des permissions personnalisables.",
					button: 'Accéder au Formulaire'
				},
				comingSoon: {
					title: 'Bientôt disponible...',
					description:
						'De nouveaux outils sont en cours de développement pour vous aider à maximiser votre utilisation de Discloud.'
				}
			}
		}
	},
	botInvite: {
		title: "Lien d'invitation d'un bot Discord",
		description:
			"Générez facilement un lien d'invitation pour votre bot Discord avec des portées et des permissions personnalisables.",
		guide: {
			title: 'Comment obtenir votre lien de bot ?',
			step1: 'Rendez-vous sur le ',
			step2: 'Sélectionnez votre application et cliquez sur "OAuth2".',
			step3: 'Copiez l\'ID Client dans la section "Informations générales".',
			step4: 'Collez-le ci-dessous et configurez les portées et les permissions.',
			step5: "Copiez le lien d'invitation généré et partagez-le !"
		},
		input: {
			clientId: 'ID Client',
			placeholder: 'Entrez votre ID Client',
			error: 'Veuillez entrer un ID Client.'
		},
		scopes: {
			title: 'Portées',
			options: {
				bot: {
					label: 'Bot',
					description: 'Ajoutez le bot au serveur avec des permissions.'
				},
				commands: {
					label: "Commandes d'application",
					description: 'Active les commandes slash.'
				},
				identify: {
					label: 'Identifier',
					description: "Identifie l'utilisateur autorisant l'application."
				},
				guilds: {
					label: 'Guildes',
					description: "Accède aux informations des serveurs de l'utilisateur."
				}
			}
		},
		permissions: {
			title: 'Permissions',
			main: {
				admin: {
					label: 'Administrateur',
					description: 'Accès complet au serveur.'
				},
				sendMessages: {
					label: 'Envoyer des messages',
					description: 'Envoyer des messages dans le chat.'
				},
				connect: {
					label: 'Se connecter',
					description: 'Se connecter aux salons vocaux.'
				},
				speak: {
					label: 'Parler',
					description: 'Parler dans les salons vocaux.'
				}
			},
			additional: {
				title: 'Permissions Additionnelles',
				general: {
					title: 'Général',
					auditLog: {
						label: "Voir le journal d'audit",
						description: "Voir le journal d'audit du serveur."
					},
					manageServer: {
						label: 'Gérer le serveur',
						description: 'Gérer les paramètres du serveur.'
					},
					manageRoles: {
						label: 'Gérer les rôles',
						description: 'Gérer les rôles du serveur.'
					},
					manageChannels: {
						label: 'Gérer les salons',
						description: 'Gérer les salons du serveur.'
					},
					kickMembers: {
						label: 'Expulser des membres',
						description: 'Expulser des membres du serveur.'
					},
					banMembers: {
						label: 'Bannir des membres',
						description: 'Bannir des membres du serveur.'
					},
					createInstantInvite: {
						label: 'Créer une invitation instantanée',
						description: "Créer un lien d'invitation instantané."
					},
					changeNickname: {
						label: 'Changer le pseudo',
						description: 'Changer votre pseudo.'
					},
					manageNicknames: {
						label: 'Gérer les pseudos',
						description: 'Gérer les pseudos des membres.'
					},
					manageExpressions: {
						label: 'Gérer les expressions',
						description: 'Gérer les expressions du serveur.'
					},
					createExpressions: {
						label: 'Créer des expressions',
						description: 'Créer des expressions pour le serveur.'
					},
					manageWebhooks: {
						label: 'Gérer les webhooks',
						description: 'Gérer les webhooks du serveur.'
					},
					viewChannels: {
						label: 'Voir les salons',
						description: 'Voir les salons du serveur.'
					},
					manageEvents: {
						label: 'Gérer les événements',
						description: 'Gérer les événements du serveur.'
					},
					createEvents: {
						label: 'Créer des événements',
						description: 'Créer des événements pour le serveur.'
					},
					moderateMembers: {
						label: 'Modérer des membres',
						description: 'Modérer les membres du serveur.'
					},
					viewServerInsights: {
						label: 'Voir les statistiques du serveur',
						description: 'Voir les statistiques du serveur.'
					},
					viewServerSubscriptionInsights: {
						label: 'Voir les abonnements du serveur',
						description: 'Voir les statistiques des abonnements du serveur.'
					}
				},
				text: {
					title: 'Texte',
					createPublicThreads: {
						label: 'Créer des fils publics',
						description: 'Créer des fils de discussion publics.'
					},
					createPrivateThreads: {
						label: 'Créer des fils privés',
						description: 'Créer des fils de discussion privés.'
					},
					sendMessagesInThreads: {
						label: 'Envoyer des messages dans les fils',
						description: 'Envoyer des messages dans les fils de discussion.'
					},
					manageMessages: {
						label: 'Gérer les messages',
						description: 'Gérer les messages.'
					},
					sendTTSMessages: {
						label: 'Envoyer des messages TTS',
						description: 'Envoyer des messages text-to-speech.'
					},
					manageThreads: {
						label: 'Gérer les fils',
						description: 'Gérer les fils de discussion.'
					},
					embedLinks: {
						label: 'Intégrer des liens',
						description: 'Intégrer des liens dans les messages.'
					},
					attachFiles: {
						label: 'Joindre des fichiers',
						description: 'Joindre des fichiers aux messages.'
					},
					readMessageHistory: {
						label: "Lire l'historique des messages",
						description: "Lire l'historique des messages."
					},
					mentionEveryone: {
						label: 'Mentionner tout le monde',
						description: 'Mentionner tout le monde.'
					},
					useExternalEmojis: {
						label: 'Utiliser des emojis externes',
						description: 'Utiliser des emojis externes.'
					},
					useExternalStickers: {
						label: 'Utiliser des stickers externes',
						description: 'Utiliser des stickers externes.'
					},
					addReactions: {
						label: 'Ajouter des réactions',
						description: 'Ajouter des réactions aux messages.'
					},
					useSlashCommands: {
						label: 'Utiliser les commandes slash',
						description: 'Utiliser les commandes slash.'
					},
					useEmbeddedActivities: {
						label: 'Utiliser les activités intégrées',
						description: 'Utiliser les activités intégrées.'
					},
					useExternalApps: {
						label: 'Utiliser des applications externes',
						description: 'Utiliser des applications externes.'
					},
					createPolls: {
						label: 'Créer des sondages',
						description: 'Créer des sondages dans le serveur.'
					}
				},
				voice: {
					title: 'Voix',
					video: {
						label: 'Vidéo',
						description: 'Activer la vidéo.'
					},
					muteMembers: {
						label: 'Rendre muet des membres',
						description: 'Rendre muet des membres dans les salons vocaux.'
					},
					deafenMembers: {
						label: 'Rendre sourd des membres',
						description: 'Rendre sourd des membres dans les salons vocaux.'
					},
					moveMembers: {
						label: 'Déplacer des membres',
						description: 'Déplacer des membres entre salons vocaux.'
					},
					useVoiceActivity: {
						label: "Utiliser l'activité vocale",
						description: "Utiliser l'activité vocale pour parler."
					},
					prioritySpeaker: {
						label: 'Haut-parleur prioritaire',
						description: 'Donner la priorité de parole.'
					},
					requestToSpeak: {
						label: 'Demander la parole',
						description: 'Demander la parole dans les salons.'
					},
					useEmbeddedActivities: {
						label: 'Utiliser les activités intégrées',
						description: 'Utiliser les activités intégrées.'
					},
					useSoundboard: {
						label: 'Utiliser la table sonore',
						description: 'Utiliser la table sonore.'
					},
					useExternalSounds: {
						label: 'Utiliser des sons externes',
						description: 'Utiliser des sons externes.'
					}
				}
			}
		},
		output: {
			title: "Lien d'invitation généré",
			placeholder: "Entrez votre ID Client pour générer le lien d'invitation."
		},
		buttons: {
			copyButton: 'Copier le lien',
			copySuccess: 'Copié !',
			copyError: 'Erreur lors de la copie du lien !',
			enabled: 'Activé',
			disabled: 'Désactivé'
		}
	},
	discloudConfig: {
		title: 'Configuration Discloud',
		form: {
			appType: {
				label: "Type d'application"
			},
			appName: {
				label: "Nom de l'application",
				placeholder: "Entrez le nom de l'application",
				error: "Vous devez fournir un nom pour l'application."
			},
			appId: {
				label: 'ID (Sous-domaine)',
				placeholder: 'Entrez le nom de votre sous-domaine',
				warningMessage: "'discloud.app' n'est pas nécessaire.",
				error: "Vous devez fournir un identifiant pour l'application."
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
