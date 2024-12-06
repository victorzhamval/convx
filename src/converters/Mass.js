import Converter from './Converter';

export default class MassConverter extends Converter {
  #grams = 0;

  from(unit) {
    if (unit === 'pg') {
      this.#grams = this.value / 1000 / 1000 / 1000 / 1000;
    } else if (unit === 'ng') {
      this.#grams = this.value / 1000 / 1000 / 1000;
    } else if (unit === 'mcg') {
      this.#grams = this.value / 1000 / 1000;
    } else if (unit === 'mg') {
      this.#grams = this.value / 1000;
    } else if (unit === 'g') {
      this.#grams = this.value;
    } else if (unit === 'kg') {
      this.#grams = this.value * 1000;
    } else if (unit === 't') {
      this.#grams = this.value * 1000 * 1000;
    } else if (unit === 'mt') {
      this.#grams = this.value * 1000 * 1000 * 1000;
    } else if (unit === 'gt') {
      this.#grams = this.value * 1000 * 1000 * 1000 * 1000;
    }
    return this;
  }

  to(unit) {
    if (unit === 'pg') {
      return this.#grams * 1000 * 1000 * 1000 * 1000;
    } else if (unit === 'ng') {
      return this.#grams * 1000 * 1000 * 1000;
    } else if (unit === 'mcg') {
      return this.#grams * 1000 * 1000;
    } else if (unit === 'mg') {
      return this.#grams * 1000;
    } else if (unit === 'g') {
      return this.#grams;
    } else if (unit === 'kg') {
      return this.#grams / 1000;
    } else if (unit === 't') {
      return this.#grams / 1000 / 1000;
    } else if (unit === 'mt') {
      return this.#grams / 1000 / 1000 / 1000;
    } else if (unit === 'gt') {
      return this.#grams / 1000 / 1000 / 1000 / 1000;
    }
  }
}
