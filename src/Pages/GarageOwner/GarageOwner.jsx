import React from 'react'
import Navgation from '../../Components/Navbar/Navgation'
import './GarageOwner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons'


function GarageOwner() {
  let GouserName = "GarageOwnerName";
  let username ="UserName";
  let numberOfRes ="9521";

  return (
    
    <div>
      <div>
        <Navgation/>
      </div>
      <div>
        <h1>Garage Owner Control Page</h1>
    <br />
    <br />

        <p className='welcoming'>Welcome {GouserName}</p>
      </div>
      

      <div className="requests">
  <div class="header">
    <p class="heading">Waiting Users</p>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>

    </div>
       <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>

  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
</div>









      <div className="requests">
  <div class="header">
    <p class="heading">Waiting Users</p>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>

    </div>
       <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>

  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
</div>
















<div className="requests">
  <div class="header">
    <p class="heading">Waiting Users</p>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>

    </div>
       <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>

  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
  <div class="user">
    <div class="userinfo">
      <p class="name">{username}</p>
      <div className='buttons'>
        <button className='Abutt'>Accept</button>
        <button className='Rbutt'>Reject</button>
        </div>
    </div>
    <div className="albumcover">
  <FontAwesomeIcon icon={faSquareParking} className='icon' />
</div>
  </div>
</div>




















<div className="remote">
  <div class="header">
    <p class="heading">Here Is Your Remote</p>
  </div>

  <div className='sss'>
    <p className='status'>Status</p>
    <div class="toggle-wrapper">
      <input type="checkbox" class="toggle-checkbox" />
      <div class="toggle-container">
        <div class="toggle-button">
          <div class="toggle-button-circles-container">
            <div class="toggle-button-circle"></div>
            <div class="toggle-button-circle"></div>
            <div class="toggle-button-circle"></div>
            <div class="toggle-button-circle"></div>
            <div class="toggle-button-circle"></div>
            <div class="toggle-button-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='increase'>
<div className='input-group'>
  <button className='butto' id="decrement">-</button>
  <input type="number" id="input" value="1" readonly/>
  <button className='butto' id="increment">+</button>
</div>
</div>



</div>








    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    <br />

    </div>
  )
}

export default GarageOwner