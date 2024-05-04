import personal from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row p-10">
    <div className='lg-w-1/2 md-w-1/2 '>
        <div className='relative'>
        <img src={personal} className="w-3/4 rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        

    </div>
    <div className='lg-w-1/2 md-w-1/2 space-y-5'>
      <h3 className='text-3xl text-orange-500 font-bold'>About</h3>
      <h1 className="text-5xl font-bold">We are qualified & of Experience in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default About;