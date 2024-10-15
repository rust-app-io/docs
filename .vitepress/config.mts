import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RustApp Documentation",
  description: "Docs for RustApp",

  //cleanUrls: true,

  themeConfig: {
    i18nRouting: true,
    logo: { src: '/favicon.ico' },

    sidebar: [
      {
        text: 'Начало работы',
        items: [
          { 
            text: 'Быстрый старт',
            link: '/ru/start/getting-started'
          },
          { 
            text: 'Первые шаги',
            collapsed: true,
            items: [
              { 
                text: 'Настройка плагина',
                link: '/ru/start/first-steps/plugin-config'
              },
              { 
                text: 'Настройка сайта',  
                link: '/ru/start/first-steps/site-config'
              },
              { 
                text: 'Управление сотрудниками',  
                link: '/ru/start/first-steps/invite-stuff'
              },
            ]
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
          },
          { 
            text: 'Консольные команды',
            link: '/ru/start/commands'
          }
        ]
      },
      {
        text: 'Разработчикам',
        items: [
          { text: 'Свои оповещения', link: '/ru/dev/custom-alerts' },
          { text: 'ЛС игроков (/pm)', link: '/ru/dev/chat' },
          { text: 'Поддержка рейдблока', link: '/ru/dev/raidblock' },
          { text: 'Свой UI жалоб', link: '/ru/dev/ui' },
          { text: 'API плагина', link: '/ru/dev/plugin-api' },
        ]
      }
    ],
    
    /*sidebar: generateSidebar([{
      resolvePath: '/ru/',
      scanStartPath: 'ru',

      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,

      includeFolderIndexFile: false,
      includeRootIndexFile: false,
      
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 5
    }]),*/


    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rust-app-io' },
    ],
  },
})
