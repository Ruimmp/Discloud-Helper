export default {
	header: {
		title: 'Discloud Helper',
		tools: {
			title: 'Tools'
		}
	},
	footer: {
		allRightsReserved: 'All rights reserved',
		info: 'This website is not affiliated with'
	},
	landing: {
		welcome: {
			title: 'Welcome to Discloud Helper',
			description:
				'Useful tools to simplify the configuration and management of your applications on Discloud.'
		},
		functionalities: {
			title: 'Features',
			tools: {
				configGenerator: {
					title: 'Discloud.config Generator',
					description:
						'Easily create the <code>discloud.config</code> file to set up your bot or site on Discloud.',
					button: 'Access Generator'
				},
				comingSoon: {
					title: 'Coming Soon...',
					description: 'New tools are under development to help you maximize your use of Discloud.'
				}
			}
		}
	},
	discloudConfig: {
		title: 'Discloud Configuration',
		description: 'Generate the configuration file for Discloud quickly and easily.',
		ogTitle: 'Discloud Helper - discloud.config Generator',
		ogDescription: 'Generate the discloud.config file to configure your application on Discloud.',
		header: {
			title: 'Discloud Configuration'
		},
		form: {
			appType: {
				label: 'Application Type'
			},
			appName: {
				label: 'Application Name',
				placeholder: 'Enter the application name',
				error: 'You must provide a name for the application.'
			},
			appMain: {
				label: 'Main File',
				placeholder: 'e.g., index.js or src/index.js',
				error: {
					missingTitle: 'Main file not provided',
					missingDescription:
						'The main file is required. This file is the entry point for the application (bot or site).',
					invalidExtension: 'Invalid file type. Please use a valid extension.',
					javaJar: 'Java projects must be compiled into a .jar file.',
					invalidJarName: 'Use only alphanumeric characters (e.g., app.jar).'
				},
				examples: {
					title: 'Examples:',
					list: ['app.js', 'bot.py', 'server.php', 'main.rs'],
					javaNote: 'Java files must be compiled to'
				}
			},
			appAvatar: {
				label: 'Avatar URL',
				placeholder: 'Enter the avatar URL',
				error:
					'The avatar URL must be valid and end with .png, .jpg, or .jpeg. Example: https://i.imgur.com/zVC0jHl.png'
			},
			appRam: {
				label: 'RAM (in MB)',
				placeholder: 'RAM (in MB)',
				error: {
					site: 'The minimum RAM for websites is {minRamSite} MB.',
					bot: 'The minimum RAM for bots is {minRamBot} MB.'
				}
			},
			autorestart: {
				label: 'Automatic Restart',
				enabled: 'Enabled',
				disabled: 'Disabled',
				tooltip: 'Available starting from the ',
				linkText: 'Platinum Plan',
				linkUrl: 'https://discloud.app/plans'
			},
			appVersion: {
				label: 'Version',
				placeholder: {
					selectFile: 'Provide the main file to see available versions',
					invalidFile: 'Invalid file type'
				}
			},
			appApts: {
				label: 'APT Packages',
				info: 'Dependencies'
			},
			downloadButton: 'Download Configuration',
			copyButton: 'Copy',
			copySuccess: 'Copied!',
			copyError: 'Error copying content!'
		},
		preview: {
			title: 'discloud.config'
		}
	},
	errorPage: {
		title: 'Error',
		description: 'Something went wrong while loading the page.',
		messages: {
			404: 'Page not found.',
			500: 'Internal server error.',
			403: 'Access denied. You do not have permission to access this resource.',
			400: 'Bad request. Please check the URL or data you provided.',
			default: 'An unexpected error occurred. Please try again later.'
		},
		instructions: 'If you believe this is an error, please contact support or try again.',
		button: 'Return to Homepage'
	}
};
