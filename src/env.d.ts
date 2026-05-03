/// <reference types="astro/client" />

// UnoCSS presetAttributify が flex・items-center・text="..." 等の非標準 HTML 属性を
// テンプレートに追加するため、JSX 型チェックを通過させる必要がある。
// これにより全 HTML/SVG 属性の型チェックが緩くなるが、現状のワークアラウンドとして許容。
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    [key: string]: unknown;
  }
  interface SVGAttributes {
    [key: string]: unknown;
  }
}
