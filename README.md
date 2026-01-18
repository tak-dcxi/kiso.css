# kiso.css

A modern reset CSS designed with Japanese websites in mind.

kiso.css provides better defaults for modern web development. It standardizes browser styles, offering a consistent and solid foundation for your project.

- [**Demo Site**](https://tak-dcxi.github.io/kiso.css/)
- [**Test Page**](https://tak-dcxi.github.io/kiso.css/test.html)

## Key Features

- 🇯🇵 **Optimized for Japanese**: Provides beautiful typography for Japanese text out-of-the-box.
- ♿ **Accessibility First**: Ensures accessible web design, including WCAG-compliant focus styles and forced color mode support.
- 🪶 **Minimal & Sensible**: Resets only what's necessary, preserving useful browser defaults and avoiding destructive styles.
- 🔧 **Zero Specificity**: All rules use the `:where()` selector for easy overriding without specificity conflicts.
- 🎯 **Modern CSS**: Utilizes modern CSS properties like `text-wrap: pretty` and `scrollbar-gutter: stable`.
- 🌏 **Multilingual Ready**: Designed with consideration for Japanese, English, and RTL languages.

## Installation

### Package Manager

```bash
npm install kiso.css
# or
yarn add kiso.css
```

Import it into your main CSS file:

```css
@import "kiso.css";

/* Your styles here */
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/kiso.css@latest/kiso.css"
/>
```

## Core Concepts

### Japanese Typography

kiso.css is built to handle Japanese text gracefully. It automatically adjusts spacing between Japanese and alphanumeric characters (`text-autospace`), refines line breaks (`line-break: strict`), and handles punctuation spacing (`text-spacing-trim`), which are often overlooked in other reset libraries.

### Zero Specificity

By wrapping selectors in `:where()`, kiso.css keeps specificity at zero. This means you can easily override any style with your own classes or element selectors without resorting to `!important` or complex selectors.

```css
/* This will easily override kiso.css without any specificity issues */
a {
  color: red;
}
```

### Accessibility by Default

Accessibility is a core principle. For example, lists remain recognizable by screen readers (`list-style-type: ""`), and focus rings are enhanced for better visibility (`:focus-visible`).

### Selective Reset

We avoid "over-resetting." Useful UA styles like `font-weight` on headings, `padding` on buttons, and borders on tables are preserved to reduce the amount of code you need to write. Destructive resets like `appearance: none` are avoided.

## Contributing

Feedback and contributions are welcome\! Please feel free to open an [Issue](https://github.com/tak-dcxi/kiso.css/issues) or a [Pull Request](https://github.com/tak-dcxi/kiso.css/pulls).

## License

kiso.css is available under the [MIT License](https://www.google.com/search?q=./LICENSE).

---

**Note:** The name "kiso" (基礎) means "foundation" in Japanese, reflecting our goal to provide a solid base for your web projects.
