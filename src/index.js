import React, {useState, useEffect, useContext} from 'react';
import ReactDOM, {render} from 'react-dom';
import TableList from './Table/TableList';
import Context from './context';
import './index.less';

export default function App() {
    const [arr, setArr] = useState([]);
    const [selectedRow, setSelectedRow] = useState({
        name: 'Anna',
        username: 'Korotaeva',
        job: 'frontend',
    });
    const [isEditMode, setisEditMode] = useState(false);

    function addNewRowInTable() {
        const newObject = {
            id: arr.length + 1,
            name: selectedRow.name,
            username: selectedRow.username,
            job: selectedRow.job,
        };

        const newArr = [...arr, newObject];
        setArr(newArr);
    }

    function removeRow(id) {
        const newArr = arr.filter((row) => row.id !== id);
        setArr(newArr);
    }

    function editRow(id) {
        const found = arr.find((element) => element.id == id);
        setSelectedRow(found);
    }

    function saveRowToData() {
        const updatedArr = arr.map((item) => {
            if (item.id === selectedRow.id) {
                return selectedRow;
            }
            return item;
        });
        setArr(updatedArr);
    }

    return (
        <Context.Provider value={{removeRow, editRow, setisEditMode}}>
            <div className='wrapper'>
                <h1 className='title'>The Table</h1>
                <TableList data={arr}/>
                <label htmlFor='user'>User:</label>
                <br/>
                <input
                    type='text'
                    id='user'
                    value={selectedRow.name}
                    onChange={(event) =>
                        setSelectedRow({
                            ...selectedRow,
                            name: event.target.value,
                        })
                    }
                />
                <br/>
                <label htmlFor='username'>Username:</label> <br/>
                <input
                    type='text'
                    id='username'
                    value={selectedRow.username}
                    onChange={(event) =>
                        setSelectedRow({
                            ...selectedRow,
                            username: event.target.value,
                        })
                    }
                />
                <br/>
                <label htmlFor='job'>Job:</label> <br/>
                <input
                    type='text'
                    id='job'
                    value={selectedRow.job}
                    onChange={(event) =>
                        setSelectedRow({
                            ...selectedRow,
                            job: event.target.value,
                        })
                    }
                />
                <br/>
                {isEditMode ? (
                    <>
                        <button
                            className='form-button show-button'
                            onClick={saveRowToData}
                        >
                            Save
                        </button>
                        <button
                            className='form-button show-button'
                            onClick={() => setisEditMode(false)}
                        >
                            Cancel
                        </button>
                        {' '}
                    </>
                ) : (
                    <button className='form-button' onClick={addNewRowInTable}>
                        Add user
                    </button>
                )}
            </div>
        </Context.Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
