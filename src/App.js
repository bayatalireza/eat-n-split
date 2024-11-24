
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {

  const[showForm, setShowForm] = useState(false)

  function handleSetShowForm(){
    setShowForm(showForm=>!showForm)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends}/>
        {showForm && <FormAddFriend />}
        <Button onHandleSetShowForm={handleSetShowForm}>{showForm?"Close":"Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
