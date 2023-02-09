import confetti from 'canvas-confetti';
import { reactify } from '@vueuse/core';
import YAML from 'js-yaml';
import { EventItem } from '~/@types';

export const ajax = (url: string, options: any) => {
  return fetch(url, options).then((response) =>
    response.json().then((data) => {
      if (!response.ok) {
        throw {
          ...data,
          status: response.status,
          statusText: response.statusText,
        };
      }
      return data;
    }),
  );
};

export const clone = function (obj: object) {
  return JSON.parse(JSON.stringify(obj || {}));
};

export const filterList = function (list = [], filter: Array<any>) {
  return list.filter((item) => {
    for (const key in filter) {
      if (item[key] === undefined || item[key] !== filter[key]) return false;
    }
    return true;
  });
};

export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

export const getEventIndexById = (state: any, eventId: any) =>
  state.events.findIndex(
    (event: EventItem) => event.id.toString() === eventId.toString(),
  );

export function getParameterByName(name: string, url?: string) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&#]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const isoDateToEuroDate = function (isoDate: string) {
  const parts = isoDate.split('-');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
};

export const isoDateToDate = function (isoDate: string) {
  return new Date(isoDate);
};

export const launchConfetti = () => {
  const end = Date.now() + 3 * 1000;

  // go Buckeyes!
  const colors = ['#34495E', '#41B883'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const searchAsEuroDate = function (value: string, searchString: string) {
  const parts = searchString.split('.');
  const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return isoDate === value;
};

export const stringify = reactify((input: any) =>
  YAML.dump(input, { skipInvalid: true }),
);

export const sum = ({ a, b }: { a: number; b: number }): number => a + b;

console.log(sum({ a: 1, b: 2 }));
