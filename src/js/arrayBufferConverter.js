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
    return new TextDecoder().decode(this.buffer);
  }
}
