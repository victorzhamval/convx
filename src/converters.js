
import DigitalStorage from "./converters/DigitalStorage";
import Length from "./converters/Length";
import Mass from "./converters/Mass";
import Time from "./converters/Time";

export const CONVERTERS = [
  {
    name: 'Digital Storage',
    convert: new DigitalStorage(),
    units: [
      {
        name: 'Bit',
        abbr: 'b'
      },
      {
        name: 'Byte',
        abbr: 'B'
      },
      {
        name: 'Kilobyte',
        abbr: 'KB'
      },
      {
        name: 'Megabyte',
        abbr: 'MB'
      },
      {
        name: 'Gigabyte',
        abbr: "GB"
      },
      {
        name: 'Terabyte',
        abbr: 'TB'
      }
    ]
  },
  {
    name: 'Mass',
    convert: new Mass(),
    units: [
      {
        name: 'Picogram',
        abbr: 'pg'
      },
      {
        name: 'Nanogram',
        abbr: 'ng'
      },
      {
        name: 'Microgram',
        abbr: 'µg'
      },
      {
        name: 'Milligram',
        abbr: 'mg'
      },
      {
        name: 'Gram',
        abbr: 'g'
      },
      {
        name: 'Kilogram',
        abbr: 'kg'
      },
      {
        name: 'Tonne',
        abbr: 't'
      },
      {
        name: 'Megatonne',
        abbr: 'mt'
      },
      {
        name: 'Gigatonne',
        abbr: 'gt'
      },
    ]
  },
  {
    name: 'Time',
    convert: new Time(),
    units: [
      {
        name: 'Nanosecond',
        abbr: 'ns'
      },
      {
        name: 'Microsecond',
        abbr: 'µs'
      },
      {
        name: 'Millisecond',
        abbr: 'ms'
      },
      {
        name: 'Second',
        abbr: 's'
      },
      {
        name: 'Minute',
        abbr: 'min'
      },
      {
        name: 'Hour',
        abbr: 'h'
      },
      {
        name: 'Day',
        abbr: 'd'
      },
      {
        name: 'Week',
        abbr: 'w'
      },
      {
        name: 'Month',
        abbr: 'm'
      },
      {
        name: 'Year',
        abbr: 'y'
      },
      {
        name: 'Decade',
        abbr: 'de'
      },
      {
        name: 'Century',
        abbr: 'c'
      },
    ]
  },
  {
    name: 'Length',
    convert: new Length(),
    units: [
      {
        name: 'Nanometre',
        abbr: 'nm'
      },
      {
        name: 'Micrometre',
        abbr: 'µm'
      },
      {
        name: 'Milimetre',
        abbr: 'mm'
      },
      {
        name: 'Centimetre',
        abbr: 'cm'
      },
      {
        name: 'Inch',
        abbr: 'in'
      },
      {
        name: 'Foot',
        abbr: 'ft'
      },
      {
        name: 'Metre',
        abbr: 'm'
      },
      {
        name: 'Yard',
        abbr: 'yd'
      },
      {
        name: 'Kilometre',
        abbr: 'km'
      },
      {
        name: 'Mile',
        abbr: 'mi'
      },
      {
        name: 'Nautical mile',
        abbr: 'NM'
      },
    ]
  }
]

