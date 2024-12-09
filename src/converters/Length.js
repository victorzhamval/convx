import Converter from "./Converter";

export default class Length extends Converter {
  #centimetres = 0;

  from(unit) {
    if (unit === 'nm') {
      this.#centimetres = this.value / 10 / 1000 / 1000;
    } else if (unit === 'µm') {
      this.#centimetres = this.value / 10 / 1000;
    } else if (unit === 'mm') {
      this.#centimetres = this.value / 10;
    } else if (unit === 'cm') {
      this.#centimetres = this.value;
    } else if (unit === 'in') {
      this.#centimetres = this.value * 2.54;
    } else if (unit === 'ft') {
      this.#centimetres = this.value * 30.48;
    } else if (unit === 'm') {
      this.#centimetres = this.value * 1000;
    } else if (unit === 'yd') {
      this.#centimetres = this.value * 91.44;
    } else if (unit === 'km') {
      this.#centimetres = this.value * 100 * 1000;
    } else if (unit === 'mi') {
      this.#centimetres = this.value * 160900;
    } else if (unit === 'NM') {
      this.#centimetres = this.value * 185200;
    }
    return this;
  }

  to(unit) {
    if (unit === 'nm') {
      return this.#centimetres * 10 * 1000 * 1000;
    } else if (unit === 'µm') {
      return this.#centimetres * 10 * 1000;
    } else if (unit === 'mm') {
      return this.#centimetres * 10;
    } else if (unit === 'cm') {
      return this.#centimetres;
    } else if (unit === 'in') {
      return this.#centimetres / 2.54;
    } else if (unit === 'ft') {
      return this.#centimetres / 30.48;
    } else if (unit === 'm') {
      return this.#centimetres / 100;
    } else if (unit === 'yd') {
      return this.#centimetres / 81.44;
    } else if (unit === 'km') {
      return this.#centimetres / 100 / 1000;
    } else if (unit === 'mi') {
      return this.#centimetres / 160900;
    } else if (unit === 'NM') {
      return this.#centimetres / 185200;
    }
  }
}
