import React, { useState } from 'react';
import { ButtonSearch, DivFilter, DivInput, InputFrom, InputTo, OptionFilter, SelectFilter, SelectPrice } from './Filter.styled';

const Filter = ({ carsList, onMakeFilterChange, onRentalPriceFilterChange, onMileageFilterChange, onSearchClick }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedRentalPrice, setSelectedRentalPrice] = useState('');
  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handleRentalPriceChange = event => {
    setSelectedRentalPrice(event.target.value);
  };

  const handleFromMileageChange = event => {
    setMileageRange({ ...mileageRange, from: event.target.value });
  };

  const handleToMileageChange = event => {
    setMileageRange({ ...mileageRange, to: event.target.value });
  };

  return (
    <DivFilter>
      <SelectFilter value={selectedMake} onChange={handleMakeChange}>
        <OptionFilter value="">All Makes</OptionFilter>
        {Array.from(new Set(carsList.map(car => car.make))).map(make => (
          <OptionFilter key={make} value={make}>
            {make}
          </OptionFilter>
        ))}
      </SelectFilter>
      <SelectPrice value={selectedRentalPrice} onChange={handleRentalPriceChange}>
        <OptionFilter value="">All Prices</OptionFilter>
        {Array.from(new Set(carsList.map(car => car.rentalPrice))).sort((a, b) => a - b).map(price => (
          <OptionFilter key={price} value={price}>
            {price}
          </OptionFilter>
        ))}
      </SelectPrice>
     <DivInput> <InputFrom
        type="text"
        placeholder="From"
        value={mileageRange.from}
        onChange={handleFromMileageChange}
      />
      <InputTo
        type="text"
        placeholder="To"
        value={mileageRange.to}
        onChange={handleToMileageChange}
      /></DivInput>
      <ButtonSearch type="button" onClick={() => onSearchClick(selectedMake, selectedRentalPrice, mileageRange)}>
        Search
      </ButtonSearch>
    </DivFilter>
  );
};

export default Filter;
