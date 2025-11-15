import React, {useRef, useState} from 'react';


interface SearchBoxProps {
  onSearch: (keyword: string) => void;
}


const BoardActions = ({onSearch}:SearchBoxProps ) => {
    
    //검색어 입력필드값을 관리
    const  [searchTerm, setSearchTerm] = useState('');
    

    //참조 테스트
    const inputRef = useRef<HTMLInputElement>(null);


    //검색어입력시
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchTerm(e.target.value); 
    } 

    
    //검색버튼 클릭 이벤트
    const handleClick = () => {
        console.log(inputRef.current?.value);
        onSearch(searchTerm); 
    }
    //텍스트박스 enter 클릭시
    const handleOnKeyDown = (e: React.KeyboardEvent) => {
        
        if(e.key == 'Enter'){
            console.log('BoardActions.enter()');
            handleClick();
        }
    }
    

    return (
        <div className="board-actions">
            <button className="write-button">글쓰기2</button>

            <input type="text" placeholder="검색어를 입력하세요" ref={inputRef} onChange={handleInput} onKeyDown={handleOnKeyDown} />
            <button className="search-button" onClick={handleClick}>검색</button>
        </div>
    );
};

export default BoardActions;