# 🥞 Ape Finance UIkit

[![Version](https://img.shields.io/npm/v/@apefinance-libs/uikit)](https://www.npmjs.com/package/@apefinance-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@apefinance-libs/uikit)](https://www.npmjs.com/package/@apefinance-libs/uikit)

Ape Finance UIkit is a set of React components and hooks used to build pages on Ape's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @apefinance-libs/uikit`

## Setup

### Theme

Before using Ape Finance UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@apefinance-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@apefinance-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/apefinance-uikit/)
