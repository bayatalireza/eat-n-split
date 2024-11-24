import React from 'react'
import Button from './Button'

export default function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>SPLIT A BILL WITH X</h2>
      <label >💰Bill value</label>
      <input type="text" />

      <label >Your expense</label>
      <input type="text" />

      <label >X's expense</label>
      <input type="text" />

      <label >Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>
      <Button>Split bill</Button>
      </form>
  )
}
