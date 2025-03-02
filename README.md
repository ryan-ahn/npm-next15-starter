# Ryan's Next15 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-next13-starter)

## Features

- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Turbo)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🧩&nbsp;&nbsp;SSR & Page Transition (Next13)
- [x] 🕋&nbsp;&nbsp;Simple Store (Zustand)
- [x] 📙&nbsp;&nbsp;Code Formatter (ESLint Airbnb & Prettier)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] 🚰&nbsp;&nbsp;Handle Page to Middleware
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style
- [x] 📍&nbsp;&nbsp;Absolute Path
- [x] 📫&nbsp;&nbsp;Page SEO
- [ ] 🪄&nbsp;&nbsp;Dark Mode
- [ ] 📱&nbsp;&nbsp;Check Device

## Frameworks

- **Bundler** : Turbo
- **SSR** : Next13
- **Core** : React18
- **Store** : Zustand

## Code Structure

- **Static(public)**
- **Root(app)** <br/>
- ⎣&nbsp;**components** - atomic stateless components <br/>
- ⎣&nbsp;**config** - configure <br/>
- ⎣&nbsp;**constants** - static data <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**libs** - store, hooks, utils <br/>
- ⎣&nbsp;**styles** - style set<br/>

## Getting Started

### 1) Installation

```shell
npx next13-starter my-project
cd my-project
```

### 2) Run Project

```shell
npm run dev
```

### 3) Run Deploy

```shell
npm run build
```

## Using with Store

```javascript
// user store
import { useDataStore } from "@store/index";

const { data, setData } = useStore();
```

## Using with Mixin

```javascript
// use mixin
import {
  flexSet,
  boxSet,
  colorSet,
  backgroundSet,
  fontSet,
} from "@styles/mixin";

const Style = styled.div`
  // flex set(justify-content, align-items, flex-direction)
  ${() => theme.flexSet("center", "center", "column")};

  // box set(width, height, border-radius)
  ${() => theme.boxSet("00px", "00px", "00px")};

  // color set(color, background-color)
  ${() => theme.colorSet("white", "black")};

  // background set(url, object-fit)
  ${() => theme.backgroundSet("URL", "contain")};

  // font set(font-size, font-weight, line-height)
  ${() => theme.fontSet(00, 000, 00)};
`;
```
