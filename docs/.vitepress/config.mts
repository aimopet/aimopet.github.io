import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '爱摸宠 - Aimopet',
  description: 'AI MoPet',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/page/start' },
      {
        text: '论坛',
        link: 'https://m.aimopet.com/forum.php',
        target: '_self',
        rel: 'noopener noreferrer',
      },
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '开始', link: '/page/start' },
          { text: '教程', link: '/page/textbook' },
          { text: '提示词的最佳实践', link: '/page/best-practices' },
        ],
      },
    ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
