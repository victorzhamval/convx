
import DigitalStorageConverter from "./converters//DigitalStorage";
import MassConverter from "./converters/Mass";
import TimeConverter from "./converters/Time";

export const CONVERTERS = [
  {
    name: 'Digital Storage',
    convert: new DigitalStorageConverter(),
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
    convert: new MassConverter(),
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
        abbr: 'mcg'
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
    convert: new TimeConverter(),
    units: [
      {
        name: 'Nanosecond',
        abbr: 'ns'
      },
      {
        name: 'Microsecond',
        abbr: 'us'
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
  }
]

//
//export const UNITS = {
//  DIGITAL_STORAGE: {
//    BIT: 'b',
//    BYTE: 'B'
//  }
//}
