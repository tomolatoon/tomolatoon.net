import { defineConfig, presetWind3, presetIcons, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({ scale: 1.2, cdn: 'https://esm.sh/' }),
  ],
  theme: {
    colors: {
      cyan: '#5dd8f0',
      pink: '#d580f5',
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
