import { Component } from 'react';

import SeatItem from './components/SeatItem';

import Seatlayout from './components/SeatLayout';

// import { Seat } from './style';

import './App.css';

const seatsStatus = {
  selected: 'selected',
  booked: 'booked',
  available: 'available'
}

const seatsListConst = []

for (let i=1; i <= 100; i++){
  let book = seatsStatus.available
  if (i < 10){
    book = seatsStatus.booked
  }
  const val = {seat: i, id: 'seat'+i, isbooked: book}
  seatsListConst.push(val)
}

class App extends Component{
  state = {
    seatsList: seatsListConst,
    requiredSeats: 0,
  }
  selectSeatNumber = id => {
    const {seatsList} = this.state
    const updateSeat = seatsList.map(each => {
      if (each.id === id && each.isbooked !== 'booked'){
        return {...each, isbooked: seatsStatus.selected}
      }
      return each
    })
    const updateSeatsCount = seatsList.filter(each => each.id === id)[0].isbooked

    console.log(updateSeatsCount)
    
    this.setState(prev => ({
      requiredSeats: updateSeatsCount === 'available' ? prev.requiredSeats + 1 : prev.requiredSeats,
      seatsList: updateSeat,
    }))
  }

  onChangeReqiredSeats = event => {
    this.setState({requiredSeats: event.target.value})
  }

  onClickProceed = () => {
    const {seatsList} = this.state
    const updateSeat = seatsList.map(each => {
      if (each.isbooked === 'selected'){
        return {...each, isbooked: seatsStatus.booked}
      }
      return each
    })
    this.setState({requiredSeats: 0, seatsList: updateSeat})
  }

  render() {
    const {seatsList, requiredSeats} = this.state
    return(
      <div className='App'>
        <h1 className='app-head'>Book My Tickets</h1>
        <div className='inputs-card'>
          <div>
            <label className='qty-label' htmlFor='selectId'>Ticket Type:</label>
            <select id='selectId' className='select-card'>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          <div>
            <label className='qty-label' htmlFor='quantityId'>Qty:</label>
          </div>
          <input id='quantityId' value={requiredSeats} onChange={this.onChangeReqiredSeats} className='number-input' type="number" min="1" max="100" />
        </div>
        <div className='card-container'>
          <div className='card-1'>
            <div className='seats-card'>
              <ul className='seats-list'>
                {seatsList.map(each => (
                  <SeatItem item={each} key={each.id} selectSeatNumber={this.selectSeatNumber} />
                ))}
              </ul>
            </div>
            <button onClick={this.onClickProceed} className='proceed-btn' type='button'>PROCEED</button>
          </div>
          <div className='card-2'>
            <Seatlayout />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
