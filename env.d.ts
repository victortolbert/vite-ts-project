/// <reference types="vite/client" />
/// <reference path="@types/react/index.d.ts"/>
import { DOMAttributes } from 'react';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}
