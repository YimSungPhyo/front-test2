import React from 'react';

interface PageNationProp {
    currentPage: number;  //현재페이지
    setCurrentPage: (page: number) => void ;  //페이지 변경함수
    totalItemCnt: number;  //목록갯수
    pageSize: number;  //페이지 사이즈
}



const PageNation = ( { currentPage, setCurrentPage, totalItemCnt, pageSize } : PageNationProp) => { 

    console.log('PageNation.currentPage:' +  currentPage);
    //console.log('PageNation.totalPages:' +  totalPages);
    console.log('PageNation.totalItemCnt:' +  totalItemCnt);
    console.log('PageNation.pageSize:' +  pageSize);

    const totalPages = Math.ceil(totalItemCnt / pageSize); //전체페이지 갯수 
    const pageNumbers = Array.from( {length: totalPages }, (_, i)  =>  i + 1 ); //ex) [1,2,3,...,totalPages]


return (
        <div className="pagination">
            <a href="#">&laquo; 이전</a>
            
            {pageNumbers.map((page) => (
                <a key={page} href="#" className={currentPage === pageNumbers[page]?'active':''} 

                onClick={ e => setCurrentPage(page)}
                
                >{page}</a> 
            ))}

            {/*}
            <span>&nbsp;<span/>
                
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            {*/}

            <a href="#">다음 &raquo;</a>
        </div>
    );
};

export default PageNation;