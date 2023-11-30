import {
    Button,
    Container,
} from '@mui/material'
import  { useEffect, useState } from 'react'
import CustomerList from 'src/pages/UserList/components/CustomerList/CustomerList.tsx'
import Filters from 'src/pages/UserList/components/Filters/Filters.tsx'
import userData from 'src/services/customers/data/customers.json'
import { fetchUserList, selectUserList } from 'src/services/customers/store.tsx'
import { User, UserListFilterType } from 'src/services/customers/types.ts'
import { goToSingleUserPage } from 'src/services/router/store.ts'
import { saveCurrentUser } from 'src/services/single-customer/store.ts'
import { useAppDispatch, useAppSelector } from 'src/store'


function UserList() {
    const dispatch = useAppDispatch();
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState<UserListFilterType>({
        lastName: '',
        gender: '',
        country: '',
    });

    const users = useAppSelector(selectUserList)

    useEffect(() => {
        dispatch(fetchUserList(userData));
    }, []);

    useEffect(() => {
        const filtered = users
            .filter((user) =>
                filters.lastName === '' ? true : user.lastName.toLowerCase().includes(filters.lastName.toLowerCase())
            )
            .filter((user) => (filters.gender === '' ? true : user.gender.toLowerCase() === filters.gender))
            .filter((user) =>
                filters.country === '' ? true : user.country.toLowerCase().includes(filters.country.toLowerCase())
            );

        setFilteredUsers(filtered);
        setPage(1)
    }, [users, filters]);

    const handlePageChange = () => {
        setPage(page + 1);
    };

    const paginatedUsers = filteredUsers.slice(0, page * 10);

    return (
        <Container>
            <Filters filters={filters} setFilters={setFilters} />
            {paginatedUsers.length > 0 ? (
                <>
                    <CustomerList
                        users={paginatedUsers}
                        onListItemClick={(user) => {
                            dispatch(goToSingleUserPage())
                            dispatch(saveCurrentUser(user))

                        }}
                    />
                    <Button variant="outlined" onClick={handlePageChange}>Load More</Button>
                </>
            ) : (
                <h1>Sorry, there is no customers</h1>
            )}
        </Container>
    );
}

export default UserList