import React from "react";
import { useRecoilState } from "recoil";
import { selectedTabId } from "../app";

const Tab = (props) => {
    const tabName = props.tab.tabName;
    const tabId = props.tab.id;

    const [selTabId, setSelTabId] = useRecoilState(selectedTabId);

    const changeTab = (id) => {
        setSelTabId(id);
    };

    return (
        <li>
            <a href="#"
                id={tabId}
                className={selTabId === tabId ? 'on' : ''}
                onClick={() => changeTab(tabId)}>
                <span>{tabName}</span>
            </a>
        </li>
    );
};

const TabList = () => {
    const tabList = [
        {tabName: '뉴스', id: 'news'},
        {tabName: '도서', id: 'book'}
    ];

    return (
        <div className="tabBox">
            <ul className="tabList" role="tablist">
            {
                tabList.map((v, inx) => {
                    return <Tab key={inx} tab={v} />
                })
            }
            </ul>
        </div>
    )
};

export default TabList;