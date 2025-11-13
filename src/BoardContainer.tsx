import React, {useState} from "react";
import './BoardContainer.css';
import PostList from "./PostList";
import PageNation from "./PageNation";
import BoardActions from "./BoardActions"
import {MOCK_POSTS} from "./data";

// 목업 데이터 (실제로는 API 호출 또는 Context/Redux에서 가져옴)
/* 위 에서 MOCK_POSTS 데이타를 따로 분리하여 주석처리
const MOCK_POSTS = [
    { id: 6, title: "테스트 게시글 6입니다.", author: "홍길동", date: "2025-11-10" },
    { id: 5, title: "테스트 게시글 5입니다.", author: "김철수", date: "2025-11-09" },
    { id: 4, title: "테스트 게시글 4입니다.", author: "이영희", date: "2025-11-08" },
    { id: 3, title: "React Mockup 테스트 게시글입니다.", author: "홍길동", date: "2025-11-10" },
    { id: 2, title: "간단한 HTML 구조 확인", author: "김철수", date: "2025-11-09" },
    { id: 1, title: "안녕하세요! 첫 게시글입니다.", author: "이영희", date: "2025-11-08" },
];
*/

//component 
const BoardContainer: React.FC = () => {
    
    //검색어
    const [serchText, setSearchText] = useState("");
    
    //출력 데이타 
    let searchDatas = MOCK_POSTS;

    //검색 핸들러
    const search = () => {
        searchDatas  = MOCK_POSTS.filter(post => post.title.includes(serchText));
    }


    return (

        <div className="board-container">
            <h2 className="board-title">게시판</h2>
        
            {/*  component: PostList */}
            <PostList posts={searchDatas}/>
            

            {/*  component: Pagination */}
            <PageNation/>
        

            {/* component: BoardActions */}
            <BoardActions set={search}/>

        </div>    

    );

};

export default BoardContainer;