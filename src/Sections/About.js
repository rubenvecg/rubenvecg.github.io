import Photo from '../Components/Photo'


const About = () => {
    return (
        <div id='about' class='section'>
            <h1 className='section-title'>About me</h1>

            <div id='about-content'>
                <div data-aos='fade-right' data-aos-duration='1000'>
                    <Photo 
                    id='headshot' width='250px' height='250px' radius='125px' imgSource='photo.jpg'></Photo>
                </div>

                <div data-aos='fade-left' data-aos-duration='2000' data-aos-delay='500'>

                <p class='description'>I am a <b>Computer Systems</b> undergraduate student at the <b>New York City</b> College of Technology.
                Born in <b>Barranquilla, Colombia</b>, I moved to NYC in 2015 and I am currently looking for internship and/or work
                opportunities.</p>

                <p class='description'>Since the moment I wrote my first piece of <b>code</b>, my ever-growing <b>passion</b> for <b>Computer Science</b> has 
                helped me develop skills such as <b>Web Development</b> and <b>Data Analysis & Visualization</b>. As someone who enjoys taking new challenges,
                I am always on the look to expand my knowledge and learn new disciplines.</p>
                    
                </div>                       
            </div> 
        </div>
    );
}
 
export default About;