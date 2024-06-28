import React from 'react'
//import { useContext } from 'react'

const Contact = () => {
  return (
    <div  className="my-6" style={{backgroundColor:"#ECECEC"}} >
    <div  id="carouselExampleIndicators" style={{width:"792px"/*,left:"386px"*/}} className="carousel slide container">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"357px"}} src="https://storage.googleapis.com/assets.inotebook.net/media/image/[3x2]1f402a8a070b1bbfe1bfbb46fd62a957.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"357px"}} src="https://cdn.thewirecutter.com/wp-content/media/2020/11/notebooks-2048px-2008.jpg?auto=webp&quality=75&width=1023" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"357px"}} src="https://media.istockphoto.com/id/1278975233/photo/high-school-students-doing-exam-in-classroom.jpg?s=612x612&w=0&k=20&c=YxR9rTScBny8zJuZchXhKx08jxpP354Rv4XD6q-0xS8=" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    
    </div>
  )
}

export default Contact
