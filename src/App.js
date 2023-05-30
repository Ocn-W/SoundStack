import Header from './Header';
import TaskMenu from './TaskMenu';
import Main from './Main';
import './css/app.css';

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <TaskMenu/>
    </div>
    <div>
      <Main/>
    </div>
    </>
  );
}

export default App;
