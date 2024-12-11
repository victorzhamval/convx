import Converter from './Converter';

export default class Frequency extends Converter {
  #hertz = 0;
  name = 'Frequency';
  units = {
    hertz: {
      name: 'Hertz',
      abbr: 'hz'
    },
    kilohertz: {
      name: 'Kilohertz',
      abbr: 'khz'
    },
    megahertz: {
      name: "Megahertz",
      abbr: 'mhz'
    },
    gigahertz: {
      name: 'Gigahert',
      abbr: 'ghz'
    }
  }

  from(unit) {
    if (unit === this.units.hertz.abbr) {
      this.#hertz = this.value;
    } else if (unit === this.units.kilohertz.abbr) {
      this.#hertz = this.value * 1000;
    } else if (unit === this.units.megahertz.abbr) {
      this.#hertz = this.value * 1000 * 1000;
    } else if (unit === this.units.gigahertz.abbr) {
      this.#hertz = this.value * 1000 * 1000 * 1000;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.hertz.abbr) {
      return this.#hertz;
    } else if (unit === this.units.kilohertz.abbr) {
      return this.#hertz / 1000;
    } else if (unit === this.units.megahertz.abbr) {
      return this.#hertz / 1000 / 1000;
    } else if (unit === this.units.gigahertz.abbr) {
      return this.#hertz / 1000 / 1000 / 1000;
    }
  }
}

