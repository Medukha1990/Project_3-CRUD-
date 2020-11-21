import React, { useContext } from 'react';
import Context from '../context';

export default function TableItem({ rowData }) {
	const { removeRow } = useContext(Context);
	const { editRow } = useContext(Context);
	const { setisEditMode } = useContext(Context);
	return (
		<tr className='tbodyRow'>
			<td>{rowData.id}</td>
			<td>{rowData.name}</td>
			<td>{rowData.username}</td>
			<td>{rowData.job}</td>
			<td>
				<button
					className='action-button'
					onClick={() => removeRow(rowData.id)}
				>
					Delete
				</button>
				<button
					className='action-button'
					onClick={() => {
						editRow(rowData.id);
						setisEditMode(true);
					}}
				>
					Edit
				</button>
			</td>
		</tr>
	);
}
