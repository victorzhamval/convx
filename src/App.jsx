import { useEffect, useState } from 'react';
import { Logo, Select, Input, Output } from './components';
import { CONVERTERS } from './converters';

function App() {
  const [converter, setConverter] = useState(CONVERTERS[0]);
  const units = Object.values(converter.units);
  const [converterData, setConverterData] = useState({
    value: '1',
    from: units[0].abbr,
    to: units[1].abbr,
  });

  const [output, setOutput] = useState(0);

  function handleOnChangeConverter(e) {
    const { value } = e.target;
    const selectedConverter = CONVERTERS[value];
    const units = Object.values(selectedConverter.units);
    setConverter(selectedConverter);
    setConverterData(old => ({
      ...old,
      from: units[0].abbr,
      to: units[1].abbr
    }));
  }

  function handleOnChangeData(e) {
    const { name, value } = e.target;
    setConverterData(old => ({ ...old, [name]: value }));
  }

  function handleConvert() {
    const { value, from, to } = converterData;
    const converted = converter.set(value).from(from).to(to);
    setOutput(converted);
  }

  useEffect(() => {
    handleConvert();
  }, [converter, converterData]);

  return (
    <div className="w-svh h-svh flex flex-col items-center">
      <div className="flex flex-col items-start w-[32rem] gap-14">
        <Logo />
        <div className="w-full flex flex-col gap-2">
          <Select name="converter" onChange={handleOnChangeConverter}>
            {
              // No need of keys
              CONVERTERS.map((converter, index) => (
                <option key={index} value={index}>{converter.name}</option>
              ))
            }
          </Select>
          <div className="flex flex-row gap-2">
            <Select name="from" value={converterData.from} onChange={handleOnChangeData}>
              {
                Object.values(converter.units).map((unit, index) => (
                  <option key={index} value={unit.abbr}>{unit.name}</option>
                ))
              }
            </Select>
            <Select name="to" value={converterData.to} onChange={handleOnChangeData}>
              {
                Object.values(converter.units).map((unit, index) => (
                  <option key={index} value={unit.abbr}>{unit.name}</option>
                ))
              }
            </Select>
          </div>
          <div className="flex flex-row gap-2">
            <Input
              name="value"
              type='number'
              value={converterData.value}
              placeholder="Value"
              onChange={handleOnChangeData}
            />
            <div>
            </div>
            <Output>
              {output}
            </Output>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
