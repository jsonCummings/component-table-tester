import logo from './logo.svg';
import './App.css';
import {ItemTable} from 'item-table-jsoncummings';

function App() {
  const filesArray = [
    { name: 'vishanti.exe', device: 'Strange', path: '\\Device\\SanctumSantorum\\Floor4\\vishanti.exe', status: 'scheduled' },
    { name: 'webShooter.exe', device: 'SpiderMan', path: '\\Device\\Queens\\Thiwp\\webshooter.exe', status: 'available' },
    ];
  return (
    <div className="App">
        <ItemTable itemsArray={filesArray}/>
    </div>
  );
}

export default App;
