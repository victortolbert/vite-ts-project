// How To Cast An Array Of Objects Into A Dictionary Object in Typescript
// https://medium.com/@mmitchellgarcia?p=2a3b9790da81
function normalizeArray<T>(array: Array<T>, indexKey: keyof T) {
  const normalizedObject: any = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i][indexKey];
    normalizedObject[key] = array[i];
  }
  return normalizedObject as { [key: string]: T };
}

const test = normalizeArray([{ id: 'abfq-f39f', name: 'Test' }], 'id');
console.log(test);
// {‘abfq-f39f’: {id: 1, name: 'Test'}}

export { normalizeArray };
