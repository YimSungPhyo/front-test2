import React, {useState} from 'react';


interface SearchBoxProps {
  onSearch: (keyword: string) => void;
}


const BoardActions = ({onSearch}:SearchBoxProps ) => {
    
    //검색어 입력필드값을 관리
    const  [searchTerm, setSearchTerm] = useState('');


    //검색어입력시
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchTerm(e.target.value); 
    } 

    
    //검색버튼 클릭 이벤트
    const handleClick = () => {
        onSearch(searchTerm); 
    }
    

    return (
        <div className="board-actions">
            <button className="write-button">글쓰기2</button>
            <input type="text" placeholder="검색어를 입력하세요"  onChange={handleInput} />
            <button className="search-button" onClick={handleClick}>검색</button>
        </div>
    );
};

export default BoardActions;