// src/Board.tsx

import React, { useState } from 'react';
import type { NewPost, Post } from './types';
import PostList from './PostList';
import PostForm from './PostForm';


//초기화 변수
const initialPosts: Post[] = [

     {  
         id: 0
        ,title: '제목1 입니다.'
        ,content: '좋은내용입니다.!!'
        ,date: '2025-01-01' // 작성일
     }

];

//Board 컴포넌트 정의
const Board = () => {

    const [posts, setPosts] = useState<Post[]>(initialPosts);

    // ID 생성을 위한 간단한 카운터
    const [nextId, setNextId] = useState(initialPosts.length + 1);

    // 새 글 작성 핸들러 함수
    const handleAddPost = (newPostData: NewPost) => {
        const newPost: Post = {
        id: nextId,
        title: newPostData.title,
        content: newPostData.content,
        date: new Date().toISOString().split('T')[0], // 현재 날짜
        };

        // 불변성(Immutability)을 지키며 새로운 게시글을 배열 맨 앞에 추가
        setPosts([newPost, ...posts]);
        setNextId(nextId + 1);
    }


    // 🚨 브라우저에서 posts 배열이 잘 출력되는지 확인하는 것이 목표입니다.
    //const [posts, setPosts] = useState<Post[]>(initialPosts);


    return (
        <div style={{ padding: '20px', border: '1px' }}>
            <h2>게시판</h2>
            
            {
                /*
                posts.map(post => (
                
                        <div key={post.id}>{post.title} - {post.date}</div> 
                    )
                )
                */
            }
            {/* 위 구현을 자식 컴포넌트로 만들고 , 속성을 넘김 */}
            <PostList posts = {posts}/>
            <PostForm onAddPost={handleAddPost} />
   




        </div>
    );

};
export default Board;

