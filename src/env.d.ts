/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    [key: string]: unknown;
  }
  interface SVGAttributes {
    [key: string]: unknown;
  }
}
