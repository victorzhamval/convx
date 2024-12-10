
import Converter from './Converter';

export default class Time extends Converter {
  #seconds = 0;
  name = 'Time';
  units = Object.freeze({
    nanosecond: {
      name: 'Nanosecond',
      abbr: 'ns'
    },
    microsecond: {
      name: 'Microsecond',
      abbr: 'µs'
    },
    millisecond: {
      name: 'Millisecond',
      abbr: 'ms'
    },
    second: {
      name: 'Second',
      abbr: 's'
    },
    minute: {
      name: 'Minute',
      abbr: 'min'
    },
    hour: {
      name: 'Hour',
      abbr: 'h'
    },
    day: {
      name: 'Day',
      abbr: 'd'
    },
    week: {
      name: 'Week',
      abbr: 'w'
    },
    month: {
      name: 'Month',
      abbr: 'm'
    },
    year: {
      name: 'Year',
      abbr: 'y'
    },
    decade: {
      name: 'Decade',
      abbr: 'de'
    },
    century: {
      name: 'Century',
      abbr: 'c'
    },
  });

  from(unit) {
    if (unit === this.units.nanosecond.abbr) {
      this.#seconds = this.value / 1000 / 1000 / 1000;
    } else if (unit === this.units.microsecond.abbr) {
      this.#seconds = this.value / 1000 / 1000;
    } else if (unit === this.units.millisecond.abbr) {
      this.#seconds = this.value / 1000;
    } else if (unit === this.units.second.abbr) {
      this.#seconds = this.value;
    } else if (unit === this.units.minute.abbr) {
      this.#seconds = this.value * 60;
    } else if (unit === this.units.hour.abbr) {
      this.#seconds = this.value * 60 * 60;
    } else if (unit === this.units.day.abbr) {
      this.#seconds = this.value * 60 * 60 * 24;
    } else if (unit === this.units.week.abbr) {
      this.#seconds = this.value * 60 * 60 * 24 * 7;
    } else if (unit === this.units.month.abbr) {
      this.#seconds = this.value * 60 * 60 * 24 * 30;
    } else if (unit === this.units.year.abbr) {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12;
    } else if (unit === this.units.decade.abbr) {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12 * 10;
    } else if (unit === this.units.century.abbr) {
      this.#seconds = this.value * 60 * 60 * 24 * 30 * 12 * 10 * 10;
    }
    return this;
  }

  to(unit) {
    if (unit === this.units.nanosecond.abbr) {
      return this.#seconds * 1000 * 1000 * 1000;
    } else if (unit === this.units.microsecond.abbr) {
      return this.#seconds * 1000 * 1000;
    } else if (unit === this.units.millisecond.abbr) {
      return this.#seconds * 1000;
    } else if (unit === this.units.second.abbr) {
      return this.#seconds;
    } else if (unit === this.units.minute.abbr) {
      return this.#seconds / 60;
    } else if (unit === this.units.hour.abbr) {
      return this.#seconds / 60 / 60;
    } else if (unit === this.units.day.abbr) {
      return this.#seconds / 60 / 60 / 24;
    } else if (unit === this.units.week.abbr) {
      return this.#seconds / 60 / 60 / 24 / 7;
    } else if (unit === this.units.month.abbr) {
      return this.#seconds / 60 / 60 / 24 / 30;
    } else if (unit === this.units.year.abbr) {
      return this.#seconds / 60 / 60 / 24 / 30 / 12;
    } else if (unit === this.units.decade.abbr) {
      return this.#seconds / 60 / 60 / 24 / 30 / 12 / 10;
    } else if (unit === this.units.century.abbr) {
      return this.#seconds / 60 / 60 / 24 / 30 / 12 / 10 / 10;
    }
  }
}

