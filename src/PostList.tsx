import React, {useState} from 'react';



//component 
const PostList = () => {
 
    return (
        <table className="post-list">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3</td>
                    <td>React Mockup 테스트 게시글입니다.</td>
                    <td>홍길동</td>
                    <td>2025-11-10</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>간단한 HTML 구조 확인</td>
                    <td>김철수</td>
                    <td>2025-11-09</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>안녕하세요! 첫 게시글입니다.</td>
                    <td>이영희</td>
                    <td>2025-11-08</td>
                </tr>
            </tbody>
        </table>
    );
};


export default PostList;
