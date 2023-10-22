import './index.css'

const SeatItem = props => {
    const {item, selectSeatNumber} = props
    const {id, seat, isbooked} = item
    const onClickSeat = () => {
        selectSeatNumber(id)
    }
    let booked = ''
    if (isbooked === 'booked'){
        booked = 'booked'
    } else if (isbooked === 'selected'){
        booked = 'select'
    } else {
        booked = 'available'
    }
    return (
        <li className={`seat-item ${booked}`} onClick={onClickSeat}>{seat}</li>
    )
}

export default SeatItem
