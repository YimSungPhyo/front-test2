import React, { useState } from 'react';

// Tailwind CSS 사용을 가정합니다.

// --- 5. BoardActions.jsx (수정됨: 검색 로직 추가) ---
function BoardActions() {
    // 1. 입력 필드의 값을 관리하는 상태
    const [searchTerm, setSearchTerm] = useState('');
    
    // 2. alert() 대신 사용자에게 메시지를 보여줄 상태
    const [searchMessage, setSearchMessage] = useState('');

    // 글쓰기 버튼 핸들러 (alert 대신 console.log로 대체)
    const handleWriteClick = () => {
        console.log("글쓰기 페이지로 이동합니다. (라우팅 필요)");
        setSearchMessage('글쓰기 버튼이 클릭되었습니다.');
    };

    // 검색 버튼 핸들러: 입력된 검색어를 읽어와 메시지를 표시
    const handleSearchClick = () => {
        if (searchTerm.trim() === '') {
            // 검색어가 없을 경우
            setSearchMessage('검색어를 입력해주세요.');
        } else {
            // 검색어가 있을 경우, alert 대신 메시지 출력
            setSearchMessage(`[검색] 버튼 클릭 완료. 검색어: "${searchTerm}"`);
            // 실제 구현 시: API 호출, 목록 필터링 등의 로직이 여기에 들어갑니다.
        }
    };

    // Input 변경 핸들러: 입력 값 업데이트
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="flex flex-col items-center mt-6">
            <div className="board-actions flex flex-wrap gap-2 justify-center w-full max-w-lg">
                <button 
                    className="write-button bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-150 ease-in-out" 
                    onClick={handleWriteClick}
                >
                    글쓰기
                </button>
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[200px]"
                />
                <button 
                    className="search-button bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-150 ease-in-out" 
                    onClick={handleSearchClick}
                >
                    검색
                </button>
            </div>
            
            {/* 검색어 출력 영역 (alert 대체) */}
            {searchMessage && (
                <div className="mt-4 p-3 bg-indigo-100 text-indigo-800 rounded-lg shadow-md w-full max-w-lg text-center font-medium animate-pulse">
                    {searchMessage}
                </div>
            )}
        </div>
    );
}

// --- 3. PostListItem.jsx ---
function PostListItem({ id, title, author, date }) {
    return (
        <tr className="border-b hover:bg-indigo-50 transition duration-100">
            <td className="p-3 text-center text-sm text-gray-500">{id}</td>
            <td className="p-3 font-medium text-gray-900 cursor-pointer hover:text-indigo-600">
                <a href={`/post/${id}`}>{title}</a>
            </td>
            <td className="p-3 text-center text-sm text-gray-700 hidden sm:table-cell">{author}</td>
            <td className="p-3 text-center text-sm text-gray-500 hidden md:table-cell">{date}</td>
        </tr>
    );
}

// --- 2. PostList.jsx ---
function PostList({ posts }) {
    return (
        <div className="overflow-x-auto shadow-xl rounded-xl w-full">
            <table className="min-w-full bg-white post-list">
                <thead>
                    <tr className="bg-indigo-600 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-3 text-center w-16">번호</th>
                        <th className="py-3 px-3 text-left">제목</th>
                        <th className="py-3 px-3 text-center hidden sm:table-cell w-28">작성자</th>
                        <th className="py-3 px-3 text-center hidden md:table-cell w-28">작성일</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {posts.map((post) => (
                        <PostListItem 
                            key={post.id} 
                            id={post.id} 
                            title={post.title} 
                            author={post.author} 
                            date={post.date} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// --- 4. Pagination.jsx ---
function Pagination() {
    return (
        <div className="pagination flex justify-center items-center space-x-1 mt-6">
            <a href="#" className="p-2 text-gray-500 hover:text-indigo-600">&laquo; 이전</a>
            <a href="#" className="p-2 bg-indigo-600 text-white rounded-lg font-bold shadow-md">1</a>
            <a href="#" className="p-2 text-gray-700 hover:bg-indigo-100 rounded-lg">2</a>
            <a href="#" className="p-2 text-gray-700 hover:bg-indigo-100 rounded-lg">3</a>
            <a href="#" className="p-2 text-gray-500 hover:text-indigo-600">다음 &raquo;</a>
        </div>
    );
}

// --- 1. BoardPage.jsx (App의 메인 컴포넌트로 사용) ---
const MOCK_POSTS = [
    { id: 3, title: "React Mockup 테스트 게시글입니다. 제목이 길어지면 어떻게 될까요?", author: "홍길동", date: "2025-11-10" },
    { id: 2, title: "간단한 HTML 구조 확인", author: "김철수", date: "2025-11-09" },
    { id: 1, title: "안녕하세요! 첫 게시글입니다.", author: "이영희", date: "2025-11-08" },
];

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center">
            <div className="board-container w-full max-w-4xl bg-white p-6 rounded-2xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b-4 border-indigo-200 pb-2">게시판</h1>
                
                <PostList posts={MOCK_POSTS} />
                
                <Pagination />
                
                {/* 검색 로직이 포함된 수정된 컴포넌트 */}
                <BoardActions />
            </div>
        </div>
    );
}