import { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer({userData, fetchUsers}) {
    useEffect(()=> {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
    <div>
        <h2>User</h2>
        <div>
            { userData && userData.users && userData.users.map(user => <p> {user._id}, {user.firstname} {user.lastname}</p>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)