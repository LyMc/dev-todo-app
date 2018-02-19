import React from 'react'
import IconButton from 'material-ui/IconButton'
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui-icons/Delete'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'

export default ({ item, toggle, remove }) => (
	<ListItem>
		<Checkbox
			checked={ item.done }
			onClick={ toggle }
		/>
		<ListItemText primary={ item.task } />
		<ListItemSecondaryAction>
			<IconButton onClick={ remove }>
				<DeleteIcon />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
)