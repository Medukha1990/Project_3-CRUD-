import React from 'react';
import TableItem from './TableItem';

export default function TableList(props) {
	return (
		<table>
			<thead>
				<tr className='theadRow'>
					<th>ID</th>
					<th>Name</th>
					<th>Username</th>
					<th>Job</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((item) => {
					return <TableItem rowData={item} key={item.id} />;
				})}
			</tbody>
		</table>
	);
}
