import about1 from '../../assets/images/about_us/person.jpg'
import about2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
          <img
            src={about1}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={about2}
            className="w-1/2 rounded-lg absolute right-5 top-32 border-8 border-white shadow-2xl"
          />
          </div>
          <div className='w-1/2'>
            <h1 className="text-2xl text-orange-600">About Us</h1>
            <h2 className="py-6 text-5xl font-bold w-2/3">
            We are qualified & of experience in this field
            </h2>
            <p className='py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn bg-orange-500">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
