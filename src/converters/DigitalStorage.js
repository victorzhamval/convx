import Converter from './Converter';

export default class DigitalStorage extends Converter {
  #bytes = 0;

  from(unit) {
    if (unit === 'b') {
      this.#bytes = this.value / 8;
    } else if (unit === 'B') {
      this.#bytes = this.value;
    } else if (unit === 'KB') {
      this.#bytes = this.value * 1000;
    } else if (unit === 'MB') {
      this.#bytes = this.value * 1000 * 1000;
    } else if (unit === 'GB') {
      this.#bytes = this.value * 1000 * 1000 * 1000;
    } else if (unit === 'TB') {
      this.#bytes = this.value * 1000 * 1000 * 1000;
    }
    return this;
  }

  to(unit) {
    if (unit === 'b') {
      return this.#bytes * 8;
    } else if (unit === 'B') {
      return this.#bytes;
    } else if (unit === 'KB') {
      return this.#bytes / 1000;
    } else if (unit === 'MB') {
      return this.#bytes / 1000 / 1000;
    } else if (unit === 'GB') {
      return this.#bytes / 1000 / 1000 / 1000;
    } else if (unit === 'TB') {
      return this.#bytes / 1000 / 1000 / 1000 / 1000;
    }
  }
}
