import App from './App.svelte';

export const Annotorious = {
  init: (element: HTMLElement) => new App({ target: element })
}

export default Annotorious;