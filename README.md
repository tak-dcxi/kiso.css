# kiso.css

kiso.css is a comprehensive yet lightweight reset CSS library for modern web development.

It standardizes browser default styles to provide a more consistent development experience.

## Features

- 🎯 **Modern CSS**: Supports the latest HTML and CSS specifications.
- ♿ **Accessibility-Focused**: WCAG-compliant styles and support for forced color modes.
- 🌏 **Multilingual Support**: Special consideration for Japanese, English, and RTL languages.
- 🪶 **Minimal Reset**: Provides only the essential minimum reset by eliminating unnecessary decorative styles.
- 🔧 **Customizable**: Easily overridable as the `:where()` selector keeps specificity at zero.

## Installation

### npm

```bash
npm install kiso.css
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/kiso.css@latest/kiso.css"
/>
```

### Direct Download

Download [kiso.css](https://github.com/tak-dcxi/kiso.css/blob/main/kiso.css) and include it in your project.

## Usage

Import kiso.css at the top of your CSS file:

```css
@import "kiso.css";

/* Your styles go here */
```

Or include it in the `<head>` of your HTML:

```html
<link rel="stylesheet" href="path/to/kiso.css" />
<link rel="stylesheet" href="your-styles.css" />
```

## Main Features

### Universal Reset

- Sets `box-sizing` to `border-box`.
- Applies minimum size constraints to prevent overflow.
- Resets default borders.

### Typography

- Adjusts font styles and wrapping suitable for both English and Japanese content.
- Standardizes monospace fonts.
- Supports modern CSS properties like `text-autospace`.

### Form Elements

- Resets for consistent styling.
- Accessible focus styles.
- Optimization for touch devices.

### Accessibility

- Support for forced color modes.
- Proper focus management.
- Considerations for screen reader compatibility.

### Embedded content

- Automatic size adjustment for images, videos, and other embedded content.
- Prevents overflow.
- Supports modern HTML like `<model>`.

## Browser Support

kiso.css is compatible with the following browser versions that support CSS Nesting.

- Google Chrome / Edge 120+
- Firefox 117+
- Safari 16.5+
- iOS Safari 16.5+

## License

[MIT License](https://www.google.com/search?q=./LICENSE)

## Origin of the Name

"Kiso" (基礎) means "foundation" in Japanese. We hope this library becomes the solid "foundation" for your web projects.
