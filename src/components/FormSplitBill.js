import React, { useState } from 'react'
import Button from './Button'


export default function FormSplitBill({selectedFriend, onHandleSplitBill}) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : ""
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  function HandleSubmit(e){
    e.preventDefault()
    if(!bill | !paidByUser)return;
    
    onHandleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)
  }

  return (
    <form className='form-split-bill' onClick={HandleSubmit} >
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label >💰Bill value</label>
      <input type="text" value={bill} onChange={e=>setBill(Number(e.target.value))}/>

      <label >Your expense</label>
      <input type="text" value={paidByUser} onChange={e=>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

      <label >{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label >Who is paying the bill</label>
      <select value={whoIsPaying} onChange={e=>setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button  >Split bill</Button>
      </form>
  )
}
