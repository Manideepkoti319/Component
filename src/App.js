import {Component} from 'react'
import UserProfile from './UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component{
  state = {
    searchInput:"",
    userDetailsList:initialUserDetailsList
  }

  onchangeSearchInput = event => {
    this.setState({searchInput:event.target.value})
  }

  deleteUser = (uniqueNo)=>{
    const {userDetailsList} = this.state
    const filteredUserList = userDetailsList.filter(each => (
      each.uniqueNo !== uniqueNo
    ))
    this.setState({
      userDetailsList:filteredUserList
    })
  }

  render(){
    const {searchInput,userDetailsList} = this.state 
    const searchResult = userDetailsList.filter(eachUser=>
        eachUser.name.includes(searchInput)
      )

    return(
      <div className='container'>
        <h1>User List</h1>
        <input type="search" onChange={this.onchangeSearchInput}/>
        <ul>
          {searchResult.map(eachUser=>(
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} value={searchInput} deleteUser={this.deleteUser}/>
          ))}
        </ul>

      </div>
    )
  }
}

export default App