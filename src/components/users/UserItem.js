import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({user: { login, avatar_url, html_url }}) =>{
  
//   state = {
//         id: 'id',
//         login: 'mojombo',
//         avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//         html_url: "https://github.com/mojombo"
//     }
  
  


    return (
      <div className='card text-center'>
        <img src={avatar_url} alt='avatar' className='round-img' style={{width:'60px' }}/>
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1' >More</Link>
        </div> 
      </div>
    )
  
}

UserItem.propTypes = {
    user: propTypes.object.isRequired,
}

export default UserItem;