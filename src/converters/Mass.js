import Converter from './Converter';

export default class Mass extends Converter {
  #grams = 0;
  name = 'Mass';
  units = Object.freeze({
    picogram: {
      name: 'Picogram',
      abbr: 'pg'
    },
    nanogram: {
      name: 'Nanogram',
      abbr: 'ng'
    },
    microgram: {
      name: 'Microgram',
      abbr: 'µg'
    },
    milligram: {
      name: 'Milligram',
      abbr: 'mg'
    },
    gram: {
      name: 'Gram',
      abbr: 'g'
    },
    kilogram: {
      name: 'Kilogram',
      abbr: 'kg'
    },
    tonne: {
      name: 'Tonne',
      abbr: 't'
    },
    megatonne: {
      name: 'Megatonne',
      abbr: 'mt'
    },
    gigatonne: {
      name: 'Gigatonne',
      abbr: 'gt'
    },
  });

  from(unit) {
    if (unit === this.units.picogram.abbr) {
      this.#grams = this.value / 1000 / 1000 / 1000 / 1000;
    } else if (unit === this.units.nanogram.abbr) {
      this.#grams = this.value / 1000 / 1000 / 1000;
    } else if (unit === this.units.microgram.abbr) {
      this.#grams = this.value / 1000 / 1000;
    } else if (unit === this.units.milligram.abbr) {
      this.#grams = this.value / 1000;
    } else if (unit === this.units.gram.abbr) {
      this.#grams = this.value;
    } else if (unit === this.units.kilogram.abbr) {
      this.#grams = this.value * 1000;
    } else if (unit === this.units.tonne.abbr) {
      this.#grams = this.value * 1000 * 1000;
    } else if (unit === this.units.megatonne.abbr) {
      this.#grams = this.value * 1000 * 1000 * 1000;
    } else if (unit === this.units.gigatonne.abbr) {
      this.#grams = this.value * 1000 * 1000 * 1000 * 1000;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.picogram.abbr) {
      return this.#grams * 1000 * 1000 * 1000 * 1000;
    } else if (unit === this.units.nanogram.abbr) {
      return this.#grams * 1000 * 1000 * 1000;
    } else if (unit === this.units.microgram.abbr) {
      return this.#grams * 1000 * 1000;
    } else if (unit === this.units.milligram.abbr) {
      return this.#grams * 1000;
    } else if (unit === this.units.gram.abbr) {
      return this.#grams;
    } else if (unit === this.units.kilogram.abbr) {
      return this.#grams / 1000;
    } else if (unit === this.units.tonne.abbr) {
      return this.#grams / 1000 / 1000;
    } else if (unit === this.units.megatonne.abbr) {
      return this.#grams / 1000 / 1000 / 1000;
    } else if (unit === this.units.gigatonne.abbr) {
      return this.#grams / 1000 / 1000 / 1000 / 1000;
    }
  }
}
