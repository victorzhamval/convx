import Converter from "./Converter";

export default class Length extends Converter {
  #centimetres = 0;
  name = 'Length';
  units = Object.freeze({
    nanometre: {
      name: 'Nanometre',
      abbr: 'nm'
    },
    micrometre: {
      name: 'Micrometre',
      abbr: 'µm'
    },
    milimetre: {
      name: 'Milimetre',
      abbr: 'mm'
    },
    centimetre: {
      name: 'Centimetre',
      abbr: 'cm'
    },
    inch: {
      name: 'Inch',
      abbr: 'in'
    },
    foot: {
      name: 'Foot',
      abbr: 'ft'
    },
    metre: {
      name: 'Metre',
      abbr: 'm'
    },
    yard: {
      name: 'Yard',
      abbr: 'yd'
    },
    kilometre: {
      name: 'Kilometre',
      abbr: 'km'
    },
    mile: {
      name: 'Mile',
      abbr: 'mi'
    },
    nauticalMile: {
      name: 'Nautical mile',
      abbr: 'NM'
    },
  });

  from(unit) {
    if (unit === this.units.nanometre.abbr) {
      this.#centimetres = this.value / 10 / 1000 / 1000;
    } else if (unit === this.units.micrometre.abbr) {
      this.#centimetres = this.value / 10 / 1000;
    } else if (unit === this.units.milimetre.abbr) {
      this.#centimetres = this.value / 10;
    } else if (unit === this.units.centimetre.abbr) {
      this.#centimetres = this.value;
    } else if (unit === this.units.inch.abbr) {
      this.#centimetres = this.value * 2.54;
    } else if (unit === this.units.foot.abbr) {
      this.#centimetres = this.value * 30.48;
    } else if (unit === this.units.metre.abbr) {
      this.#centimetres = this.value * 1000;
    } else if (unit === this.units.yard.abbr) {
      this.#centimetres = this.value * 91.44;
    } else if (unit === this.units.kilometre.abbr) {
      this.#centimetres = this.value * 100 * 1000;
    } else if (unit === this.units.mile.abbr) {
      this.#centimetres = this.value * 160900;
    } else if (unit === this.units.nauticalMile.abbr) {
      this.#centimetres = this.value * 185200;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.nanometre.abbr) {
      return this.#centimetres * 10 * 1000 * 1000;
    } else if (unit === this.units.micrometre.abbr) {
      return this.#centimetres * 10 * 1000;
    } else if (unit === this.units.milimetre.abbr) {
      return this.#centimetres * 10;
    } else if (unit === this.units.centimetre.abbr) {
      return this.#centimetres;
    } else if (unit ===  this.units.inch.abbr) {
      return this.#centimetres / 2.54;
    } else if (unit === this.units.foot.abbr) {
      return this.#centimetres / 30.48;
    } else if (unit === this.units.metre.abbr) {
      return this.#centimetres / 100;
    } else if (unit === this.units.yard.abbr) {
      return this.#centimetres / 81.44;
    } else if (unit === this.units.kilometre.abbr) {
      return this.#centimetres / 100 / 1000;
    } else if (unit === this.units.mile.abbr) {
      return this.#centimetres / 160900;
    } else if (unit === this.units.nauticalMile.abbr) {
      return this.#centimetres / 185200;
    }
  }
}
