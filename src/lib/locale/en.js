export default {
  name: 'English',
  header: {
    title: 'Discloud Helper',
    tools: {
      title: 'Tools',
    },
  },
  footer: {
    allRightsReserved: 'All rights reserved',
    info: 'This site is not officially affiliated with',
    contributors: 'Contributors',
    loadingContributors: 'Loading contributors...',
  },
  landing: {
    welcome: {
      title: 'Welcome to Discloud Helper',
      description:
        'Useful tools to simplify the configuration and management of your applications on Discloud.',
    },
    functionalities: {
      title: 'Features',
      tools: {
        configGenerator: {
          title: 'Discloud.config Generator',
          description:
            'Easily create the <code>discloud.config</code> file to set up your bot or site on Discloud.',
          button: 'Access Generator',
        },
        generateDiscordApplicationInvite: {
          title: 'Discord Bot Invite Link',
          description:
            'Generate an invite link for your Discord bot with customizable scopes and permissions.',
          button: 'Access The Form',
        },
        comingSoon: {
          title: 'Coming Soon...',
          description:
            'New tools are under development to help you maximize your use of Discloud.',
        },
      },
    },
  },
  discloudConfig: {
    title: 'Discloud Configuration',
    description:
      'Generate the configuration file for Discloud quickly and easily.',
    ogTitle: 'Discloud Helper - discloud.config Generator',
    ogDescription:
      'Generate the discloud.config file to configure your application on Discloud.',
    header: {
      title: 'discloud.config',
    },
    form: {
      appType: {
        label: 'Application Type',
      },
      appName: {
        label: 'Application Name',
        placeholder: 'Enter the application name',
        error: 'You must provide a name for the application.',
      },
      appId: {
        label: 'ID (Subdomain)',
        placeholder: 'Enter your subdomain name',
        warningMessage: "'discloud.app' is not necessary.",
        error: 'You must provide an application ID.',
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
          invalidJarName: 'Use only alphanumeric characters (e.g., app.jar).',
        },
        examples: {
          title: 'Examples:',
          list: ['app.js', 'bot.py', 'server.php', 'main.rs'],
          javaNote: 'Java files must be compiled to',
        },
      },
      appAvatar: {
        label: 'Avatar URL',
        placeholder: 'Enter the avatar URL',
        error:
          'The avatar URL must be valid and end with .png, .jpg, or .jpeg. Example: https://i.imgur.com/zVC0jHl.png',
      },
      appRam: {
        label: 'RAM (in MB)',
        placeholder: 'RAM (in MB)',
        error: {
          site: 'The minimum RAM for websites is {minRamSite} MB.',
          bot: 'The minimum RAM for bots is {minRamBot} MB.',
        },
      },
      autorestart: {
        label: 'Automatic Restart',
        enabled: 'Enabled',
        disabled: 'Disabled',
        tooltip: 'Available starting from the ',
        linkText: 'Platinum Plan',
        linkUrl: 'https://discloud.app/plans',
      },
      appVersion: {
        label: 'Version',
        placeholder: {
          selectFile: 'Provide the main file to see available versions',
          invalidFile: 'Invalid file type',
        },
      },
      appApts: {
        label: 'APT Packages',
        info: 'Dependencies',
      },
      downloadButton: 'Download Configuration',
      copyButton: 'Copy',
      copySuccess: 'Copied!',
      copyError: 'Error copying content!',
    },
    preview: {
      title: 'discloud.config',
    },
  },
  botInvite: {
    title: 'Discord Bot Invite Link',
    description:
      'Easily generate an invite link for your Discord bot with customizable scopes and permissions.',
    guide: {
      title: 'How to Obtain Your Bot Link?',
      step1: 'Go to the ',
      step2: 'Select your bot application.',
      step3: 'Copy the Client ID from the "General Information" section.',
      step4: 'Paste it below and configure scopes and permissions.',
      step5: 'Copy the generated invite link and share it!',
    },
    input: {
      clientId: 'Client ID',
      placeholder: 'Enter your Client ID',
      error: 'Please enter a Client ID.',
    },
    scopes: {
      title: 'Scopes',
      options: {
        bot: {
          label: 'Bot',
          description: 'Add the bot to the server with permissions.',
        },
        commands: {
          label: 'Application Commands',
          description: 'Enables slash commands.',
        },
        identify: {
          label: 'Identify',
          description: 'Identify the user authorizing the app.',
        },
        guilds: {
          label: 'Guilds',
          description: 'Access user server information.',
        },
      },
    },
    permissions: {
      title: 'Permissions',
      main: {
        admin: {
          label: 'Administrator',
          description: 'Full access to the server.',
        },
        sendMessages: {
          label: 'Send Messages',
          description: 'Send messages in the chat.',
        },
        connect: {
          label: 'Connect',
          description: 'Connect to voice channels.',
        },
        speak: {
          label: 'Speak',
          description: 'Speak in voice channels.',
        },
      },
      additional: {
        title: 'Additional Permissions',
        general: {
          title: 'General',
          auditLog: {
            label: 'View Audit Log',
            description: 'View the server audit log.',
          },
          manageServer: {
            label: 'Manage Server',
            description: 'Manage the server settings.',
          },
          manageRoles: {
            label: 'Manage Roles',
            description: 'Manage server roles.',
          },
          manageChannels: {
            label: 'Manage Channels',
            description: 'Manage server channels.',
          },
          kickMembers: {
            label: 'Kick Members',
            description: 'Kick members from the server.',
          },
          banMembers: {
            label: 'Ban Members',
            description: 'Ban members from the server.',
          },
          createInstantInvite: {
            label: 'Create Instant Invite',
            description: 'Create an instant invite link.',
          },
          changeNickname: {
            label: 'Change Nickname',
            description: 'Change your nickname.',
          },
          manageNicknames: {
            label: 'Manage Nicknames',
            description: 'Manage server nicknames.',
          },
          manageExpressions: {
            label: 'Manage Expressions',
            description: 'Manage server expressions.',
          },
          createExpressions: {
            label: 'Create Expressions',
            description: 'Create server expressions.',
          },
          manageWebhooks: {
            label: 'Manage Webhooks',
            description: 'Manage server webhooks.',
          },
          viewChannels: {
            label: 'View Channels',
            description: 'View server channels.',
          },
          manageEvents: {
            label: 'Manage Events',
            description: 'Manage server events.',
          },
          createEvents: {
            label: 'Create Events',
            description: 'Create server events.',
          },
          moderateMembers: {
            label: 'Moderate Members',
            description: 'Moderate server members.',
          },
          viewServerInsights: {
            label: 'View Server Insights',
            description: 'View server insights.',
          },
          viewServerSubscriptionInsights: {
            label: 'View Server Subscription Insights',
            description: 'View server subscription insights.',
          },
        },
        text: {
          title: 'Text',
          createPublicThreads: {
            label: 'Create Public Threads',
            description: 'Create public threads.',
          },
          createPrivateThreads: {
            label: 'Create Private Threads',
            description: 'Create private threads.',
          },
          sendMessagesInThreads: {
            label: 'Send Messages in Threads',
            description: 'Send messages in threads.',
          },
          manageMessages: {
            label: 'Manage Messages',
            description: 'Manage messages.',
          },
          sendTTSMessages: {
            label: 'Send TTS Messages',
            description: 'Send TTS messages.',
          },
          manageThreads: {
            label: 'Manage Threads',
            description: 'Manage threads.',
          },
          embedLinks: {
            label: 'Embed Links',
            description: 'Embed links.',
          },
          attachFiles: {
            label: 'Attach Files',
            description: 'Attach files.',
          },
          readMessageHistory: {
            label: 'Read Message History',
            description: 'Read message history.',
          },
          mentionEveryone: {
            label: 'Mention Everyone',
            description: 'Mention everyone.',
          },
          useExternalEmojis: {
            label: 'Use External Emojis',
            description: 'Use external emojis.',
          },
          useExternalStickers: {
            label: 'Use External Stickers',
            description: 'Use external stickers.',
          },
          addReactions: {
            label: 'Add Reactions',
            description: 'Add reactions.',
          },
          useSlashCommands: {
            label: 'Use Slash Commands',
            description: 'Use slash commands.',
          },
          useEmbeddedActivities: {
            label: 'Use Embedded Activities',
            description: 'Use embedded activities.',
          },
          useExternalApps: {
            label: 'Use External Apps',
            description: 'Use external applications.',
          },
          createPolls: {
            label: 'Create Polls',
            description: 'Create polls.',
          },
        },
        voice: {
          title: 'Voice',
          video: {
            label: 'Video',
            description: 'Enable video.',
          },
          muteMembers: {
            label: 'Mute Members',
            description: 'Mute members.',
          },
          deafenMembers: {
            label: 'Deafen Members',
            description: 'Deafen members.',
          },
          moveMembers: {
            label: 'Move Members',
            description: 'Move members.',
          },
          useVoiceActivity: {
            label: 'Use Voice Activity',
            description: 'Use voice activity.',
          },
          prioritySpeaker: {
            label: 'Priority Speaker',
            description: 'Priority speaker.',
          },
          requestToSpeak: {
            label: 'Request to Speak',
            description: 'Request to speak.',
          },
          useEmbeddedActivities: {
            label: 'Use Embedded Activities',
            description: 'Use embedded activities.',
          },
          useSoundboard: {
            label: 'Use Soundboard',
            description: 'Use soundboard.',
          },
          useExternalSounds: {
            label: 'Use External Sounds',
            description: 'Use external sounds.',
          },
        },
      },
    },
    output: {
      title: 'Generated Invite Link',
      placeholder: 'Enter your Client ID to generate the invite link.',
    },
    buttons: {
      copyButton: 'Copy Link',
      copySuccess: 'Copied!',
      copyError: 'Error copying content!',
      enabled: 'Enabled',
      disabled: 'Disabled',
    },
  },
  errorPage: {
    title: 'Error',
    description: 'Something went wrong while loading the page.',
    messages: {
      404: 'Page not found.',
      500: 'Internal server error.',
      403: 'Access denied. You do not have permission to access this resource.',
      400: 'Bad request. Please check the URL or data you provided.',
      default: 'An unexpected error occurred. Please try again later.',
    },
    instructions:
      'If you believe this is an error, please contact support or try again.',
    button: 'Return to Homepage',
  },
};
