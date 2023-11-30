import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { User } from 'src/services/customers/types.ts'

type Props = {
    users: User[]
    onListItemClick: (user: User) => void
}

function CustomerList ({users, onListItemClick} : Props) {
    return (
        <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'info.dark', borderRadius: '16px', margin: '0 auto 48px' }}>
            {users.map((user, key) => (
                <React.Fragment key={key}>
                    <ListItem
                        sx={{cursor: 'pointer'}}
                        alignItems='flex-start'
                        onClick={() => {
                            onListItemClick(user)
                        }}>
                        <ListItemAvatar>
                            <Avatar alt={user.lastName} src="https://picsum.photos/200/300" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<>{user.firstName} {user.lastName}</>}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {user.email}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>

            ))}
        </List>
    )
}

export default CustomerList