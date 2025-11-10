import Board from './Board'; // Board 컴포넌트를 임포트합니다.
import './App.css'; // 기본 CSS는 유지해도 좋습니다.


function App() {

    return (
        <div className='App'>
        {/* Board 컴포넌트를 렌더링합니다. 
                이 컴포넌트가 게시판의 모든 기능(폼, 목록, 상태 관리)을 담고 있습니다.
        */}
      
            <Board/> 
        </div>
        
    );
};


export default App;
