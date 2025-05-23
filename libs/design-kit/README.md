# MyHealth - Angular design kit

The MyHealth design kit is used for developing web components to integrate with MyHealth.belgium.be.

In this current version, the design kit only works with SCSS and Angular. The design kit is meant to be used with Angular Material and will modify the Angular Material system to fit MyHealth's style.

## **Installation**

```bash
npm install @myhealth-belgium/design-kit @angular/material
```

## **Importing the Design Kit in SCSS**

In your project's main SCSS file, include MH's core like so:

```scss
@use '@myhealth-belgium/design-kit' as mh;

@include mh.core($use-material: true, $use-local-fonts: true);
```

The options passed to `mh.core()` are `$use-material` & `$use-local-fonts`, which are defaulted to `$use-material: true, $use-local-fonts: true` if not specified.

If `$use-material: true` is added, the mixin will initialize Angular Material with MH's house style.
Make sure to **not** import Angular Material into your application when this option is enabled. Including the mixin will include Angular Material for you.

If you add `$use-local-fonts: true`, the theme will use the woff2 font files provided instead of calling the Google Fonts CDN (resulting in a larger package size).

### Mixins & optimization

To optimize the Design Kit and make packages as small as possible, you can choose to include a select amount of mixins to suit your application's needs.

For a full description on all the utilized mixins, please visit our [Storybook mixins & optimization page](https://ordina-group.github.io/mijn-gezondheid-web/?path=/docs/foundations-mixins-optimization--docs).

### MyHealth component overrides

You can override each component with MyHealth's styling individually. Or you can also import **all** these components **at once** with this SCSS mixin:

```scss
...

@include mh.override-all-mat-components();
```

For a full guide on how to add these components individually, please visit our [Storybook components page](https://ordina-group.github.io/mijn-gezondheid-web/?path=/docs/components).

### MyHealth variables

For more information about how to use the MH design kit, please visit our [Storybook](https://ordina-group.github.io/mijn-gezondheid-web/).
