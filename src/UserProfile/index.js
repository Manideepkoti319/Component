import './index.css'

const UserProfile = props => {
    const {userDetails,deleteUser} = props
    const {imageUrl,name,role,uniqueNo} = userDetails 

    const onDelete = () => {
        deleteUser(uniqueNo)
    }

    return(
        <li className="list-container">
            <img src={imageUrl} alt="imageUrl" className="image"/>
            <div className="profile-container">
                <h1 className="name">{name}</h1>
                <p className="role">{role}</p>
            </div>
            <div className="delete-container">
                <button className="button" onClick={onDelete}>
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="delete" className="delete-image"/>
                </button>
            </div>
        </li>
    )

}

export default UserProfile