import IconGroup from '../Components/Icon/IconGroup.js'

const Header = () => {
    return (
        <div id='header' className='container'>
            <header className="page-header">
                <h1>Ruben Vecino</h1>
                <h3>Aspiring Software Engineer</h3>

                <div id='personal-links' className='links'>
                    <IconGroup types='linkedin github' size='30' spacing='20'></IconGroup>                
                </div>
            </header>           
        </div>
    );
}
 
export default Header;