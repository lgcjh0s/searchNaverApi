import React from "react";
import { useEffect, useState } from "react"
import moment from "moment";
import { useRecoilState } from "recoil";
import { searchKeyword, selectedTabId } from "../app";

const NewsRow = (props) => {
    const title = props.row.title;
    const pubDate = moment(props.row.pubDate).format('YYYY.MM.DD HH:mm');
    const desc = props.row.description;

    return (
        <li>
            <div className="title">
                <a href="#" dangerouslySetInnerHTML={{__html: title}}></a>
            </div>
            <div className="cont">
                <span className="date">{pubDate}</span>
                <span dangerouslySetInnerHTML={{__html: desc}} />
            </div>
        </li>
    );
};

const BookRow = (props) => {
    const image = props.row.image;
    const title = props.row.title;
    const author = props.row.author;
    const desc = props.row.description;

    return (
        <li>
            <a href="#" className="bookRow">
                <div className="bookImg">
                    <img src={image} />
                </div>
                <div className="bookDesc">
                    <div className="title" dangerouslySetInnerHTML={{__html: title}} />
                    <div className="cont">
                        <span className="author">{author}</span>
                        <span dangerouslySetInnerHTML={{__html: desc}} />
                    </div>
                </div>
            </a>
        </li>
    );
};

const ListView = () => {

    const [articles, setArticles] = useState(null);
    const [selTabId, setSelTabId] = useRecoilState(selectedTabId);
    const [keyword, setKeyword] = useRecoilState(searchKeyword);

    const apiGet = async (type, param) => {
        const apiUrl = 'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
        const resp = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Naver-Client-Id': CLIENT_ID,
                'X-Naver-Client-Secret': CLIENT_SECRET
            }
        });
        resp.json().then(data => {
            setArticles(data.items);
        });

    };

    useEffect(() => {
        apiGet(selTabId, keyword);
    }, [selTabId, keyword]);

    return (
        <div className="listArea">
            <ul className="listView">
            {
                articles &&
                (selTabId === 'news') ?
                    articles.map((v, inx) => {
                        return <NewsRow key={inx} row={v} />
                    })
                : (selTabId === 'book') ?
                    articles.map((v, inx) => {
                        return <BookRow key={inx} row={v} />
                    })
                : ''
            }
            </ul>
        </div>
    );
}

export default ListView;