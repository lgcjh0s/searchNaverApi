import React from "react";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../app";

const SearchBar = () => {

    const [keyword, setKeyword] = useRecoilState(searchKeyword);

    const search = () => {
        const searchKeyword = document.querySelector('#keyword').value;
        setKeyword(searchKeyword);
    };

    return (
        <div className="header">
            <input type="text" className="iptSearch" id="keyword" />
            <button type="button" className="search" onClick={search}>
                <span>검색</span>
            </button>
        </div>
    )
};

export default SearchBar;