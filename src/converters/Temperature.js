import Converter from './Converter';

export default class Temperature extends Converter {
  #celcius = 0;
  name = 'Temperature';
  units = {
    degreeCelcius: {
      name: 'Degree Celsius',
      abbr: 'c'
    },
    fahrenheit: {
      name: 'Fahrenheit',
      abbr: 'f'
    },
    kelvin: {
      name: 'Kelvin',
      abbr: 'k'
    }
  }

  from(unit) {
    if (unit === this.units.degreeCelcius.abbr) {
      this.#celcius = this.value;
    } else if (unit === this.units.fahrenheit.abbr) {
      this.#celcius = (this.value - 32) * 5 / 9;
    } else if (unit === this.units.kelvin.abbr) {
      this.#celcius = this.value - 273.15;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.degreeCelcius.abbr) {
      return this.#celcius;
    } else if (unit === this.units.fahrenheit.abbr) {
      return (this.#celcius * 9 / 5) + 32;
    } else if (unit === this.units.kelvin.abbr) {
      return this.#celcius + 273.15;
    }
  }
}
