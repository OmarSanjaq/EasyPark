import React from 'react'
import Navgation from '../../Components/Navbar/Navgation'
import './GarageOwner.css';

function GarageOwner() {
  let GouserName = "GarageOwnerName";
  let NameOfRes ="UserN";
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
      




      <section className='requests'>
      <div class="card">
        <div class="cover item-a">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#" className='reject'>Reject</a>
            <a href="#" className='accept'>Accept</a>
          </div>
        </div>
      </div>



      <div class="card">
        <div class="cover item-c">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#">Reject</a>
            <a href="#">Accept</a>
        </div>
      </div>
    </div>





      <div class="card">
        <div class="cover item-b">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#">Reject</a>
            <a href="#">Accept</a>
          </div>
        </div>
      </div>





















      <div class="card">
        <div class="cover item-c">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#" className='reject'>Reject</a>
            <a href="#" className='accept'>Accept</a>
          </div>
        </div>
      </div>



      <div class="card">
        <div class="cover item-a">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#">Reject</a>
            <a href="#">Accept</a>
        </div>
      </div>
    </div>





      <div class="card">
        <div class="cover item-b">
          <h1>{NameOfRes}</h1>
          <p className='resID'>+{numberOfRes}</p>
          <span class="price"><img src="https://th.bing.com/th/id/R.fb134020eac5a368036b69bb302580d5?rik=6CTKBS0mwrq%2b8w&pid=ImgRaw&r=0" alt="" className='waitingicon'/></span>
          <div class="card-back">
            <a href="#">Reject</a>
            <a href="#">Accept</a>
          </div>
        </div>
      </div>




    
</section>
    

    <section>


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

    </section>
    </div>
  )
}

export default GarageOwner