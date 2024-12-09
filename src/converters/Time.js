
import Converter from './Converter';

export default class Time extends Converter {
  #seconds = 0;

  from(unit) {
    if (unit === 'ns') {
      this.#seconds = this.value / 1000 / 1000 / 1000;
    } else if (unit === 'µs') {
      this.#seconds = this.value / 1000 / 1000;
    } else if (unit === 'ms') {
      this.#seconds = this.value / 1000;
    } else if (unit === 's') {
      this.#seconds = this.value;
    } else if (unit === 'min') {
      this.#seconds = this.value * 60;
    } else if (unit === 'h') {
      this.#seconds = this.value * 60 * 60;
    } else if (unit === 'd') {
      this.#seconds = this.value * 60 * 60 * 24;
    } else if (unit === 'w') {
      this.#seconds = this.value * 60 * 60 * 24 * 7;
    } else if (unit === 'm') {
      this.#seconds = this.value * 60 * 60 * 24 * 30;
    } else if (unit === 'y') {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12;
    } else if (unit === 'de') {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12 * 10;
    } else if (unit === 'c') {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12 * 10 * 10;
    }
    return this;
  }

  to(unit) {
    if (unit === 'ns') {
      return this.#seconds * 1000 * 1000 * 1000;
    } else if (unit === 'µs') {
      return this.#seconds * 1000 * 1000;
    } else if (unit === 'ms') {
      return this.#seconds * 1000;
    } else if (unit === 's') {
      return this.#seconds;
    } else if (unit === 'min') {
      return this.#seconds / 60;
    } else if (unit === 'h') {
      return this.#seconds / 60 / 60;
    } else if (unit === 'd') {
      return this.#seconds / 60 / 60 / 24;
    } else if (unit === 'w') {
      return this.#seconds / 60 / 60 / 24 / 7;
    } else if (unit === 'm') {
      return this.#seconds / 60 / 60 / 24 / 30;
    } else if (unit === 'y') {
      return this.#seconds / 60 / 60 / 24 / 30 / 12;
    } else if (unit === 'de') {
      return this.#seconds / 60 / 60 / 24 / 30 / 12 / 10;
    } else if (unit === 'c') {
      return this.#seconds / 60 / 60 / 24 / 30 / 12 / 10 / 10;
    }
  }
}

