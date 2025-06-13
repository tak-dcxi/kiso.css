module.exports = {
  // add your custom config here
  // @see https://stylelint.io/user-guide/configuration
  extends: ["stylelint-config-standard", "taks-stylelint-order"],
  plugins: [
    "stylelint-plugin-logical-css",
    "stylelint-order",
    "stylelint-plugin-display-multi-keyword-syntax",
  ],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["import"],
      },
    ],
    "at-rule-property-required-list": {
      "font-face": ["font-family", "src"],
    },
    "block-no-empty": null,
    "color-hex-alpha": "never",
    "color-named": "never",
    "custom-property-pattern": /^_?([a-zA-Z][a-zA-Z0-9]*)(-[a-z0-9]+)*$/,
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["/^grid.+/", "/overflow/"],
      },
    ],
    "declaration-property-unit-allowed-list": {
      "line-height": [],
    },
    "unit-disallowed-list": [
      ["vw", "vh", "vi", "vb", "vmin", "vmax"],
      {
        message: (unit) => {
          const recommendationMap = {
            vw: "svw, dvw, lvw",
            vh: "svh, dvh, lvh",
            vi: "svi, dvi, lvi",
            vb: "svb, dvb, lvb",
            vmin: "svmin, dvmin, lvmin",
            vmax: "svmax, dvmax, lvmax",
          };
          return `\`${unit}\`は使用しないでください。代わりに\`${recommendationMap[unit]}\`を検討してください。`;
        },
        severity: "warning",
      },
    ],
    "declaration-property-value-disallowed-list": [
      {
        "z-index": ["/^-?[2-9]\\d*$/", "/^0$/"],
      },
      {
        message: (name, value) => {
          return `\`${value}\` values are not allowed for \`${name}\` properties`;
        },
        severity: "warning",
      },
    ],
    "declaration-property-value-no-unknown": [
      true,
      {
        ignoreProperties: {
          "margin-trim": "/.+/",
          "word-break": "auto-phrase",
          "/^background/": "/.+/",
          "box-shadow": "/.+/",
          "/^inset/": "/^anchor\\(/",
          "inline-size": "/^anchor-size\\(/",
          "block-size": "/^anchor-size\\(/",
          "/.+/": "/^round\\(/",
          "container-type": ["scroll-state"],
          "text-decoration-color": ["/^oklch\\(/", "/^oklch\\(from /"],
        },
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["anchor", "anchor-size"],
      },
    ],
    "function-url-no-scheme-relative": true,
    "media-feature-name-value-no-unknown": true,
    "no-descending-specificity": null,
    "order/order": [
      [
        "custom-properties",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
          hasBlock: true,
        },
        {
          type: "at-rule",
          name: "container",
          hasBlock: true,
        },
        {
          type: "at-rule",
          name: "media",
          hasBlock: true,
        },
        "rules",
      ],
      { unspecified: "bottom" },
    ],
    "plugin/display-multi-keyword-syntax": true,
    "plugin/use-logical-properties-and-values": [
      true,
      {
        ignore: ["overflow-x", "overflow-y"],
        severity: "warning",
      },
    ],
    "plugin/use-logical-units": [
      true,
      {
        severity: "warning",
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          "field-sizing",
          "reading-flow",
          "reading-order",
          "navigation",
          "interpolate-size",
          "text-box",
          "interactivity",
          "corner-shape",
        ],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: [
          "backdrop-filter",
          "mask",
          "mask-image",
          "text-size-adjust",
          "appearance",
        ],
      },
    ],
    "selector-class-pattern": null,
    "selector-max-id": 0,
    "selector-max-universal": [
      1,
      {
        ignoreAfterCombinators: ["+"],
      },
    ],
    "selector-nested-pattern": /&/,
    "selector-pseudo-element-colon-notation": "double",
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
};
