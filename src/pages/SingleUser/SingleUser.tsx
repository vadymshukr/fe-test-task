import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { goToUserListPage } from 'src/services/router/store.ts'
import { selectCurrentUser } from 'src/services/single-customer/store'
import { useAppDispatch, useAppSelector } from 'src/store'

function SingleUser() {
    const user = useAppSelector(selectCurrentUser)
    const dispatch = useAppDispatch()
    return (
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Box sx={{maxWidth: '500px', width: '100%', marginBottom: '24px'}}>
                {user ? (
                    <Card sx={{width: '100%'}}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://picsum.photos/600/600"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.lastName} {user.firstName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Gender: {user.gender}</p>
                                <p>Country: {user.country}</p>
                                <p>City: {user.city}</p>
                                <p>State: {user.state}</p>
                                <p>Post Code: {user.postCode}</p>
                                <p>Street: {user.street}</p>
                                <p>Street Number: {user.streetNumber}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                ) : (
                    <h1>ERROR</h1>
                )}
            </Box>
            <Button
                variant="outlined"
                onClick={() => {
                    dispatch(goToUserListPage())
                }}
            >
                Back
            </Button>
        </Container>
    )
}

export default SingleUser