import React from 'react'
import { SearchInputWrapper, SearchInputField, SearchIcon } from './SearchInputElements';

const SearchInput = ({ searchText, setSearchText }) => {
    return (
        <SearchInputWrapper>
            <SearchInputField 
                type="text" 
                value={searchText} 
                onChange={(e) => setSearchText((e.target.value).trim())} 
                placeholder="Have something in mind ?" />
            <SearchIcon />
        </SearchInputWrapper>
    )
}

export default SearchInput
