import React from 'react';
// import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';
// import { UPLOAD } from '../utils/mutations';
import Form from 'react-bootstrap/Form'
function Upload(props) {

	return (
		<div className="container my-1">
			<Link to="/">← Go to Home Page</Link>
			<div className="row">
				<div className="col-md-6 m-auto">
					<h2 className="text-center display-4 my-4">
						Upload A Pic
					</h2>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Default file input example</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
				</div>
			</div>
		</div>
	);
};


export default Upload;