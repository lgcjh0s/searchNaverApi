import React from "react";
import { atom, RecoilRoot } from "recoil";
import ListView from "./component/listview.component.jsx";
import TabList from "./component/tablist.component.jsx";
import SearchBar from "./component/searchbar.component.jsx";

export const selectedTabId = atom({
    key: 'tabId',
    default: 'news'
});

export const searchKeyword = atom({
    key: 'keyword',
    default: '코로나'
});

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <SearchBar />
                <ListView />
                <TabList />
            </div>
        </RecoilRoot>
    )
};

export default App;