# kiso.css

kiso.css is a comprehensive yet lightweight reset CSS library for modern web development.

It standardizes browser default styles to provide a more consistent development experience.

## Features

- 🎯 **Modern CSS**: Supports the latest HTML and CSS specifications.
- ♿ **Accessibility-Focused**: WCAG-compliant styles and support for forced color modes.
- 🌏 **Multilingual Support**: Special consideration for Japanese, English, and RTL languages.
- 🪶 **Minimal Reset**: Provides only the essential minimum reset by eliminating unnecessary decorative styles.
- 🔧 **Zero Specificity**: All rules use the `:where()` selector for easy overriding without specificity conflicts.

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

- Sets `box-sizing` to `border-box` for all elements and pseudo-elements.

### Document & Body

- Sets sensible defaults for root element including line-height, text spacing, and scrollbar behavior.
- Language-specific kerning settings (enabled for English, disabled for Japanese).
- Ensures body takes at least full viewport height.

### Typography

- Optimizes text rendering for both English and Japanese content.
- Implements `text-wrap: pretty` to prevent widows/orphans.
- Configures modern CSS properties like `text-autospace` and `text-spacing-trim`.
- Applies strict line-breaking rules for better text layout.

### Lists & Definitions

- Removes default list markers and padding while maintaining accessibility.
- Resets margins and indentation for cleaner layouts.

### Links

- Removes default link colors and underlines for complete styling control.
- Maintains text decoration settings for better customization.

### Form Elements

- Comprehensive reset for form controls including buttons, inputs, and textarea.
- Removes platform-specific styling (especially for iOS/macOS).
- Optimizes for touch interaction and accessibility.
- Proper cursor styles for interactive elements.

### Embedded Content

- Responsive sizing for images, videos, iframes, and other media.
- Prevents content overflow with `max-inline-size: 100%`.
- Supports modern elements like `<model>`.

### Tables

- Basic table styling with borders for better visibility.
- Consistent padding and alignment for cells.

### Interactive Elements

- Proper styling for `<details>`/`<summary>` elements.
- Reset for `<dialog>` and popover elements.
- Removes default backdrop colors for better customization.

### Focus Management

- Enhanced focus styles with `outline-offset` for better visibility.
- Hides focus outline for mouse users (`:focus-visible` support).
- Special handling for programmatically focused elements.

### Accessibility Features

- Support for forced color modes (Windows High Contrast).
- ARIA-aware disabled state styling.
- Screen reader-friendly list styling.
- Proper `[hidden]` attribute handling.

## License

[MIT License](https://www.google.com/search?q=./LICENSE)

## Origin of the Name

"Kiso" (基礎) means "foundation" in Japanese. We hope this library becomes the solid "foundation" for your web projects.
