import { mande, defaults } from 'mande';
import { Joke } from '~/@types';

export const jokes = mande('https://v2.jokeapi.dev/joke/Any?type=twopart');
// jokes.options.a

// @ts-ignore
delete defaults.headers['Content-Type'];

export function getRandomJoke() {
  return jokes.get<Joke>('/jokes/random');
}
