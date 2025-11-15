import React, {useEffect, useRef, useState} from "react";
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

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}


//component 
const BoardContainer: React.FC = () => {

    //hook state
    const [postItems, setPostItems] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    //const [searchTerm, setSearchTerm] = useState('');
    
    //useEffect는 렌더링 이후 실행되는 사이드 이펙트 처리용 훅입니다.
    //React는 컴포넌트를 렌더링 → 브라우저가 DOM 업데이트 → useEffect 실행 순서로 처리합니다.
    // 즉, 화면이 실제로 업데이트된 다음에 실행되는 코드입니다.
    //상태 변경 감지 및 후속 작업
    //브라우저 새로 고침 시 2번 호출되는 이유는 React의 Strict Mode 때문입니다. 실제배포시는 1번만 호출됨
    // (useEffect, useLayoutEffecta 만 2번호출)
    

    //개발의 Strict 모드에서 2번호출하지않기위해 ref를 활용
    const hasRun = useRef(false); // 실행 여부를 추적하는 플래그
    useEffect( () => {
        //===== 마운트시 실행 ============
        //ref 변수 hasRun false일때만 실행
        // if(!hasRun.current) {
        //    hasRun.current =true; 
         //   //alert("BoardContainer.postItems4" + JSON.stringify(postItems));
        //}
        
        //최초진입시 조회호출 ===============
        search('');

        //=== 언마운트시 또는  의존성 변경 시 새 effect 실행 전에 실행됨 실행, 
        // cleanup 함수는 return 문으로 정의 =====
        return () => {
            alert("언마운트 시 실행");

        }

    }, []); //빈배열 []일경우 초기로딩시 1회 이후. 상태가 바뀌어 컴포넌트가 렌더딩 되더라도 실행하지 않는다. 
    //   값이 있는 배열 [배열]일경우 초기로딩시1회 실행 + 배열 값이 변경될 때 실행 


    // 현재 페이지 데이터 계산
    const pageSize: number = 3;  //페이지 사이즈

    // 현재 페이지 데이터 계산
    const indexOfLast = currentPage * pageSize;
    const indexOfFirst = indexOfLast - pageSize;
    const currentData = postItems.slice(indexOfFirst, indexOfLast);

    
    //검색 핸들러
    const search = (searchTerm: string) => {
        //setSearchTerm(searchTerm);
        setCurrentPage(1); //검색시 현재페이지 초기화
        
        //API를 통해 호출했다고 가정  -------------------------
        setPostItems(MOCK_POSTS.filter(post => post.title.includes(searchTerm)));
        /**
         * 실제 API호출시 응답형식 (이렇게 서버에서 필요한 부분만 받아야 한다. 모드데이타를 다 받을 필요없다.)
         *  {
                "content": [
                    { ... },  // 데이터 20개
                    ...
                ],
                "page": 2,
                "size": 20,
                "totalPages": 50,
                "totalElements": 1000,
                "hasNext": true
            }
         */





        //fiter후에도 필터전의  postItems 과 값이 같은 이유는 setStat는 비동기 함수이기 때문
        //1.★React는 상태 변경 요청을 받은 후 ★다음 렌더링 사이클에서 실제로 상태값을 업데이트★합니다
        //alert("BoardContainer.postItems2" + JSON.stringify(postItems));

        //2.(즉시사용 방법1)필터링한 상태값을 리렌더링 전에 바로 사용하고 싶을 경우 일반변수에 넣어서 사용하면 된다.
        //let tempPostItems =  MOCK_POSTS.filter(post => post.title.includes(searchTerm));
        //alert("BoardContainer.postItems3" + JSON.stringify(tempPostItems));
        
        //3.(즉시사용 방법2)필터링한 상태값을 리렌더링 전에 바로 사용하고 싶을 경우 일반변수에 넣어서 사용하면 된다.
        

    }


    return (

        <div className="board-container">
            <h2 className="board-title">게시판</h2>
        

            {currentData.length > 0 ? (
                <>
                    {/* component: PostList */}
                    <PostList posts={currentData}/>
                    
                    {/* 
                    // component: Pagination 
                    //※MUI Pagination 을 사용하는 것도 고려
                    //  MUI(Material UI)는 리액트에서 디자인이 이미 잘 만들어진 UI 컴포넌트를 통째로 제공해주는 라이브러리
                     */}
                     <PageNation currentPage={currentPage} setCurrentPage={setCurrentPage} totalItemCnt={postItems.length} pageSize={pageSize}/>
                </>    

            ):(

                 <div>검색 결과가 존재하지 않습니다</div>
            )} 
            


            {/* component: BoardActions */}
            <BoardActions onSearch={search}  />

        </div>    

    );

};

export default BoardContainer;