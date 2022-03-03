import React, {useState} from "react";
import '../App.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import Axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import App from '../App.js'

function Navbar(){
	const [ showChoice, setShowChoice] = useState(false);
	const [idNum, setIDnum] = useState([]);
    const [searchId, setSearchID] = useState(false);
    const [showName, setShowName] = useState();
    const searchName = () => {
        Axios.get(
            `https://gorest.co.in/public/v2/users/${idNum}`).then(
            (response) => {
                setShowName({
                    id: response.data.id,
                    name: response.data.name,
                    gender: response.data.gender,
                    email: response.data.email,
                });
                setSearchID(true);
            }
        );
    };
	
	return (
		
		<div className="Navbar">
			<div style={{ display: 'block', padding: 30 }}>
		<Pagination count={1} onClick={<App/>}/>
		</div>
			<div className="leftSide">
				<div className="Links" id= {showChoice ? "hidden" : ""}>
					<a href= "/home">(Home)</a>
					<a href= "/gorestid">(Go Rest ID)</a>
				</div>
				<button onClick={() => setShowChoice(!showChoice)}>
					<ReorderIcon />
				</button>
			</div>
			<div className="rightSide">
			<div className="Main">
			</div>
			<input
			type="text"
			placeholder="Input ID Number"
			onChange={(event) => {
				setIDnum (event.target.value);
				}}
				/>
				<button onClick={searchName}> <SearchIcon /></button>
			</div>
			<div className="DisplaySection">{! searchId ? (
				<h1>Search</h1>
				):(
					<>
					<h4>Name: {showName.name}</h4>
					<h4>Gender: {showName.gender}</h4>
					<h4>Email: {showName.email}</h4>
					</>
				)}
				</div>
			</div>)} 
export default Navbar;