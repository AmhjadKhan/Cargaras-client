import image1 from '../../assets/images/banner/1.jpg'
import image2 from '../../assets/images/banner/2.jpg'
import image3 from '../../assets/images/banner/3.jpg'
import image4 from '../../assets/images/banner/4.jpg'
import image5 from '../../assets/images/banner/5.jpg'
import image6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className='mt-10 mb-10 '>
        <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full" />
    <div className="absolute flex transform left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='text-white space-y-7 pl-12 mb-16 w-1/3'>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className=''>
        <button className='bg-orange-500 h-12 rounded-xl mr-5'>Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-9 bg-red-500">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full h-96" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-9 bg-red-500">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full h-96" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-9 bg-red-500">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full h-96" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-9 bg-red-500">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Banner  