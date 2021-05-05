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
    const string = String.fromCharCode(...new Uint16Array(this.buffer));
    return string;
  }
}
