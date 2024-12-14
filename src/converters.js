
import DigitalStorage from "./converters/DigitalStorage";
import Frequency from "./converters/Frequency";
import Length from "./converters/Length";
import Mass from "./converters/Mass";
import Time from "./converters/Time";
import Temperature from './converters/Temperature'
export const CONVERTERS = [
  new DigitalStorage(),
  new Length(),
  new Mass(), 
  new Time(),
  new Frequency(),
  new Temperature()
]

