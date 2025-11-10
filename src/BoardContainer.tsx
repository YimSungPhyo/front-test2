import React, {useState} from "react";
import './BoardContainer.css';
import PostList from "./PostList";
import PageNation from "./PageNation";
import BoardActions from "./BoardActions"

//component 
const BoardContainer: React.FC = () => {

    return (

        <div className="board-container">
            <h2 className="board-title">게시판</h2>
        
            {/*  component: PostList */}
            <PostList/>
            

            {/*  component: Pagination */}
            <PageNation/>
        

            {/* component: BoardActions */}
            <BoardActions/>

        </div>    

    );

};

export default BoardContainer;