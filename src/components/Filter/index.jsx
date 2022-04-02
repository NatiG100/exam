import React, { useState } from 'react';
import { useFilter } from '../../provider/filter.provider';
import SelectedIcon from './../../assets/icons/box.svg';
import NotSelectedIcon from './../../assets/icons/box.svg';
import CircleIcon from './../../assets/icons/circle.svg';
import RadioIcon from './../../assets/icons/radio.svg';
import {
    StyledFilterSort,
    StyledFilter,
    StyledTitle,
    StyledSort,
    StyledFilterItem,
    StyledSortItem
} from './style';
const FilterSort = () => {
    const [sortSelected, setSortSelected] = useState([]);
    const {
        dispatch,
        state: { filter }
    } = useFilter();
    const setFilterSelected = (index) => () => {
        dispatch({ type: "toggle", data: { index } })
    }
    console.log(filter);
    return (
        <StyledFilterSort>
            <StyledFilter>
                <StyledTitle>Filter</StyledTitle>
                <FilterItem selected={filter[0]?.selected} setSelected={setFilterSelected(0)} />
                <FilterItem selected={filter[1]?.selected} setSelected={setFilterSelected(1)} />
                <FilterItem selected={filter[2]?.selected} setSelected={setFilterSelected(2)} />
                <FilterItem selected={filter[3]?.selected} setSelected={setFilterSelected(3)} />
                <FilterItem selected={filter[4]?.selected} setSelected={setFilterSelected(4)} />
                <FilterItem selected={filter[5]?.selected} setSelected={setFilterSelected(5)} />
                <FilterItem selected={filter[6]?.selected} setSelected={setFilterSelected(6)} />
                <FilterItem selected={filter[7]?.selected} setSelected={setFilterSelected(7)} />
            </StyledFilter>
            <StyledSort>
                <StyledTitle>Sort</StyledTitle>
                <SortItem setSelected={setSortSelected} selected={sortSelected} />
                <SortItem setSelected={setSortSelected} selected={sortSelected} />
                <SortItem setSelected={setSortSelected} selected={sortSelected} />
                <SortItem setSelected={setSortSelected} selected={sortSelected} />
            </StyledSort>
        </StyledFilterSort>
    );
}
export default FilterSort;

const FilterItem = ({ selected, setSelected, text = "dummy" }) => {
    return (
        <StyledFilterItem onClick={setSelected}>
            {selected ? <SelectedIcon /> : <NotSelectedIcon />}
            <p>{text}</p>
        </StyledFilterItem>

    );
}
const SortItem = ({ selected, setSelected, text = "dummy" }) => {
    return (
        <StyledSortItem onClick={setSelected}>
            {selected ? <RadioIcon /> : <CircleIcon />}
            <p>{text}</p>
        </StyledSortItem>
    );
}