import React, {useState} from 'react'
import AddUser from './pages/AddUser'
import './App.css'
import Edit from './pages/Edit'
import Table from './pages/Table'
import Navbar from './pages/Navbar'
import GoRestID from './pages/GoRest ID'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
	const userData = []
	const initialFormState = { id: null, name: '', username: '' }
	const [ users, setUsers ] = useState(userData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}
	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}
	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}
	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className= "Link">
		<Router>
    	<Routes>
        <Route exact path="/" element= {<App/>}/>
        <Route path="/searchid" element= {<Navbar/>}/>
		<Route path="/gorestid" element= {<GoRestID/>}/>
        </Routes>

    </Router>
		<div className="container">
			<Navbar/>
			<h1>CRUD Testing</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<Edit
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUser addUser={addUser} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<Table users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
		</div>
	)
}

export default App
