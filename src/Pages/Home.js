
import Card from '../Components/Card';
import Hello from '../Components/Hello'

// UTILIZANDO AS PROPS DO CARD
const Home = () => {

    return (
        <div className='container'>
            <h1 className='text-center'>Home</h1>
            <Hello />
            <Card titulo="Desenvolvimento Frond-End" subtitulo="React" />
            <Card titulo="Desenvolvimento Back-End" subtitulo="Java" />
        </div>
    )

}

export default Home;