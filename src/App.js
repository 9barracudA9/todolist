import './App.css';
import Todoitem from "./components/todoitem";

function App({...todo}) {
    return (
        <div>
            <Todoitem text='First task'/>
        </div>
    );
}

export default App;
