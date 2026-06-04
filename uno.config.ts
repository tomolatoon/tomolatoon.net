import { defineConfig, presetAttributify, presetIcons, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetIcons({ scale: 1.2 })],
  theme: {
    colors: {
      cyan: '#5dd8f0',
      lav: '#8fa8f8',
      'page-bg': '#f8fbff',
      dark: '#1a1a2e',
      mid: '#2a2a40',
      muted: '#555570',
    },
    fontFamily: {
      sans: "'DM Sans', 'Noto Sans JP', sans-serif",
      jp: "'Noto Sans JP', sans-serif",
    },
  },
});
