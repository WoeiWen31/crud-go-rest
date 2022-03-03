import React, { useState, } from "react";
import Axios from "axios";

export default function Main() {
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
		<div className="idName">
			<div className="Main">
			<div id="header">
			</div>
			</div>
			<h1> ID User:</h1>
			<input
			type="text"
			placeholder="Input ID Number"
			onChange={(event) => {
				setIDnum (event.target.value);
				}}
				/>
				<button onClick={searchName}> Search ID </button>
				<div className="DisplaySection">{! searchId ? (
				<h1>Please search the user using ID number.</h1>
				):(
					<>
					<h3>Name: {showName.name}</h3>
					<h3>Gender: {showName.gender}</h3>
					<h3>Email: {showName.email}</h3>
					</>
				)}
		</div>		
		</div>
	);
}