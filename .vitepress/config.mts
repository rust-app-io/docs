import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RustApp Documentation",
  description: "Docs for RustApp",

  themeConfig: {
    i18nRouting: true,
    logo: { src: '/favicon.ico' },

    sidebar: [
      {
        items: [
          { 
            text: 'Консольные команды',
            link: '/ru/start/commands'
          },
          { 
            text: 'Интеграции',
            collapsed: true,  
            items: [
              { 
                text: 'Discord',
                link: '/ru/start/integrations/discord'
              },
              { 
                text: 'Rust Cheat Check',  
                link: '/ru/start/integrations/rcc'
              },
            ]
          },
          { 
            text: 'Собственные действия',
            collapsed: true,
            items: [
              { 
                text: 'Простые действия',
                link: '/ru/start/actions/commands-basic'
              },
              { 
                text: 'Стандартные переменные',  
                link: '/ru/start/actions/commands-args'
              },
              { 
                text: 'Собственные переменные',  
                link: '/ru/start/actions/commands-args-own'
              },
              { 
                text: 'Настройки действий',  
                link: '/ru/start/actions/commands-settings'
              },
            ]
          }
        ]
      },
      {
        text: 'Разработчикам',
        items: [
          { text: 'Свои оповещения', link: '/ru/dev/custom-alerts' },
          { text: 'ЛС игроков (/pm)', link: '/ru/dev/chat' },
          { text: 'Свой UI жалоб', link: '/ru/dev/ui' },
          { text: 'API плагина', link: '/ru/dev/plugin-api' },
        ]
      }
    ],

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rust-app-io' },
    ],
  },
})
