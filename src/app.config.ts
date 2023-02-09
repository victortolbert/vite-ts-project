import { examplesMenu, hancockMenu } from './config/menus';
export const names = [
  'code examples',
  'code snippets',
  'demos',
  'lab',
  'playground',
  'sandbox',
];

export const appTitle = names[Math.floor(Math.random() * names.length)];
export const name = appTitle;
export const description = [
  'Lightweight user interface design patterns',
  'Reusable components',
  'User interface engineering and digital product management',
  'Client-side components for Angular, React, Svelte, Vue and good old plain HTML',
  'Headless and light-weight UI Components with examples using plain CSS, Boostrap 5, Bulma, and Tailwind',
];

export const title = 'Demos';
export const subtitle =
  'Kendo UI for Vue: The Complete UI Component Library for Responsive Web Apps';
export const callToAction = 'Start Free Trial';
export const shortName = 'Frontier';
export const brandColor = '#002894';
export const primaryColor = '#314b6f';
export const accentColor = '#ee7d1e';
export const secondaryColor = '#f00';
export const keywords =
  'Vite, HTML, CSS, DOM Scripting, JavaScript, TypeScript, Vue, React, Svelte, Angular, JQuery, APIs';
// export const features = 'Vite-powered, TypeScript, Examples for Vue, React and Svelte, Unit Testing, Integration Testing'
export const paths = [
  '~/Dropbox/_assets/audio',
  '~/Dropbox/_assets/video',
  '~/Dropbox/_assets/svg',
  '~/Dropbox/_assets/sound',
  '~/Dropbox/_assets/img',
  '~/Dropbox/_assets/_sql/promise_serves',
  '~/Dropbox/@hancock/',
  '~/Code/promise686/promiseserves.org/application/views/demo/',
];

export const features = [
  '⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness',
  '🗂 File based routing',
  '📦 Components auto importing',
  '🍍 State Management via Pinia',
  '📑 Layout system',
  '📲 PWA',
  '🌍 I18n ready',
  '🎨 Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.',
  '😃 Use icons from any icon sets, with no compromise',
  '🔥 Use the new < script setup > syntax',
  '📥 APIs auto importing - use Composition API and others directly',
  '🖨 Server - side generation(SSG) via vite - ssg',
  '🦔 Critical CSS via critters',
  '🦾 TypeScript, of course',
];

export const appMenu = [...examplesMenu, ...hancockMenu];

export default {
  name,
  appTitle,
  description,
  title,
  subtitle,
  shortName,
  primaryColor,
  features,
  appMenu,
};
