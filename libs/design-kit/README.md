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

@include mh.core($use-material: true);
```

The options passed to `mh.core()` are `$use-material`, which are defaulted to `$use-material: true` if not specified.

If `$use-material: true` is added, the mixin will initialize Angular Material with MH's house style.
Make sure to **not** import Angular Material into your application when this option is enabled. Including the mixin will include Angular Material for you.

### Mixins & optimization

To optimize the Design Kit and make packages as small as possible, you can choose to include a select amount of mixins to suit your application's needs.

For a full description on all the utilized mixins, please visit our [Storybook mixins & optimization page](https://smals-belgium.github.io/myhealth-storybook-design-kit/?path=/docs/foundations-mixins-optimization--docs).

### MyHealth component overrides

You can override each component with MyHealth's styling individually. Or you can also import **all** these components **at once** with this SCSS mixin:

```scss
...

@include mh.override-all-mat-components();
```

For a full guide on how to add these components individually, please visit our [Storybook components page](https://smals-belgium.github.io/myhealth-storybook-design-kit/?path=/docs/angular-components).

### MyHealth variables

For more information about how to use the MH design kit, please visit our [Storybook](https://smals-belgium.github.io/myhealth-storybook-design-kit/).
