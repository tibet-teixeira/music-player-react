import React from 'react'

import SearchIcon from '@material-ui/icons/Search'

const Search = props => {
    return (
        <div className="searchArea" key={props.id}>
            <SearchIcon />
            <input type="text" maxLength="80" placeholder="Search for Artists, Songs or Podcasts" />
        </div>
    )
}

export default Search
