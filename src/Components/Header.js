import banner from './img/banner.jpeg'

// COMPONENTE GLOBAL
const Header = () => {

    return (
        <div className='container'>
            <img src={banner} className='img-fluid' />
        </div>
    )

}

export default Header;