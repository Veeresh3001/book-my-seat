import './index.css'

const Seatlayout = () => (
    <div className='layout-card'>
        <h1>Key to seat layout:</h1>
        <ul className='layout-list'>
            <li className='layout-item'>
                <p className='layout-color avail'></p>
                <p>Available</p>
            </li>
            <li className='layout-item'>
                <p className='layout-color booked'></p>
                <p>Booked</p>
            </li>
            <li className='layout-item'>
                <p className='layout-color select'></p>
                <p>Selected</p>
            </li>
        </ul>
    </div>
)

export default Seatlayout
