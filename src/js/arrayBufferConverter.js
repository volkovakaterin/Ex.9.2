/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
export default class ArrayBufferConverter {
  constructor() {
    this.buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const string = String.fromCharCode.apply(null, new Uint16Array(this.buffer));
    if (Object.prototype.toString.call(string) === '[object String]') {
      return string;
    } throw new Error('Ошибка');
  }
}
