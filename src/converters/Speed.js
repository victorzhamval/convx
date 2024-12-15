import Converter from './Converter';

export default class Speed extends Converter {
  #metresPerSecond = 0;
  name = 'Speed';
  units = {
    metrePerSecond: {
      name: 'Metre per second',
      abbr: 'm/s'
    },
    footPerSecond: {
      name: 'Foot per second',
      abbr: 'ft/s'
    },
    kilometrePerHour: {
      name: 'Kilometre per hour',
      abbr: 'km/h'
    },
    milePerHour: {
      name: 'Mile per hour',
      abbr: 'mi/h'
    },
    knot: {
      name: 'Knot',
      abbr: 'kn'
    }
  }

  from(unit) {
    if (unit === this.units.metrePerSecond.abbr) {
      this.#metresPerSecond = this.value;
    } else if (unit === this.units.footPerSecond.abbr) {
      this.#metresPerSecond = this.value / 3.28084;
    } else if (unit === this.units.kilometrePerHour.abbr) {
      this.#metresPerSecond = this.value / 3.6;
    } else if (unit === this.units.milePerHour.abbr) {
      this.#metresPerSecond = this.value / 2.2369;
    } else if (unit === this.units.knot.abbr) {
      this.#metresPerSecond = this.value / 3.6 * 1.852;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.metrePerSecond.abbr) {
      return this.#metresPerSecond;
    } else if (unit === this.units.footPerSecond.abbr) {
      return this.#metresPerSecond * 3.28084;
    } else if (unit === this.units.kilometrePerHour.abbr) {
      return this.#metresPerSecond * 3.6;
    } else if (unit === this.units.milePerHour.abbr) {
      return this.#metresPerSecond * 2.2369;
    } else if (unit === this.units.knot.abbr) {
      return this.#metresPerSecond * 3.6 / 1.852;
    }
  }
}
