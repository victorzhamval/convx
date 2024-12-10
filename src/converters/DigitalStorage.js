import Converter from './Converter';

export default class DigitalStorage extends Converter {
  #bytes = 0;
  name = 'Digital Storage';
  units = Object.freeze({
    bit: {
      name: 'Bit',
      abbr: 'b'
    },
    byte: {
      name: 'Byte',
      abbr: 'B'
    },
    kilobyte: {
      name: 'Kilobyte',
      abbr: 'KB'
    },
    megabyte: {
      name: 'Megabyte',
      abbr: 'MB'
    },
    gigabyte: {
      name: 'Gigabyte',
      abbr: "GB"
    },
    terabyte: {
      name: 'Terabyte',
      abbr: 'TB'
    }
  });

  from(unit) {
    if (unit === this.units.bit.abbr) {
      this.#bytes = this.value / 8;
    } else if (unit === this.units.byte.abbr) {
      this.#bytes = this.value;
    } else if (unit === this.units.kilobyte.abbr) {
      this.#bytes = this.value * 1000;
    } else if (unit === this.units.megabyte.abbr) {
      this.#bytes = this.value * 1000 * 1000;
    } else if (unit === this.units.gigabyte.abbr) {
      this.#bytes = this.value * 1000 * 1000 * 1000;
    } else if (unit === this.units.terabyte.abbr) {
      this.#bytes = this.value * 1000 * 1000 * 1000 * 1000;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.bit.abbr) {
      return this.#bytes * 8;
    } else if (unit === this.units.byte.abbr) {
      return this.#bytes;
    } else if (unit === this.units.kilobyte.abbr) {
      return this.#bytes / 1000;
    } else if (unit === this.units.megabyte.abbr) {
      return this.#bytes / 1000 / 1000;
    } else if (unit === this.units.gigabyte.abbr) {
      return this.#bytes / 1000 / 1000 / 1000;
    } else if (unit === this.units.terabyte.abbr) {
      return this.#bytes / 1000 / 1000 / 1000 / 1000;
    }
  }
}
