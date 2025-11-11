import React, {useState} from "react";
import './BoardContainer.css';
import PostList from "./PostList";
import PageNation from "./PageNation";
import BoardActions from "./BoardActions"


// 목업 데이터 (실제로는 API 호출 또는 Context/Redux에서 가져옴)
const MOCK_POSTS = [
    { id: 3, title: "React Mockup 테스트 게시글입니다.", author: "홍길동", date: "2025-11-10" },
    { id: 2, title: "간단한 HTML 구조 확인", author: "김철수", date: "2025-11-09" },
    { id: 1, title: "안녕하세요! 첫 게시글입니다.", author: "이영희", date: "2025-11-08" },
];


//component 
const BoardContainer: React.FC = () => {

    return (

        <div className="board-container">
            <h2 className="board-title">게시판</h2>
        
            {/*  component: PostList */}
            <PostList posts={MOCK_POSTS}/>
            

            {/*  component: Pagination */}
            <PageNation/>
        

            {/* component: BoardActions */}
            <BoardActions/>

        </div>    

    );

};

export default BoardContainer;