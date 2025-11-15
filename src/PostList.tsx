import React, {useState} from 'react';

//{ id: 3, title: "React Mockup 테스트 게시글입니다.", author: "홍길동", date: "2025-11-10" },


//type을 사용한경우와 interface를 사용한 경우 모두 가능
/*  
type post = {
    id: number;
    title: string;
    author: string;
    date: string;
}

type Props = {
    posts: post[];
}
*/
interface post  {
    id: number;
    title: string;
    author: string;
    date: string;
}
interface Props  {
    posts: post[];
}



//component 
const PostList: React.FC<Props> = ({ posts }) => {
//const PostList = ({posts}: Props) => {
 
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
                {
                    posts.map( (post, i) => (

                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.date}</td>
                        </tr>

                    ) )
                }

                {/*}
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
                {*/}
            </tbody>
        </table>
    );
};


export default PostList;
