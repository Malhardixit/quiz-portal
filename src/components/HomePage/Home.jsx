import Topnav from '../Navbar/Topnav'
import Card from '../Card/Card'
import img from '.../assets/background.png'


function Home() {
  return (
    <>
        <Topnav
        coins={30}
        userName='Anish P.'/>
        <Card
        title='Astronomy and Space quiz'
        question={15}
        time={30}
        tags = {['Stars','Space','Earth','Paid']}
        image = {img}
        />
    </>
  )
}

export default Home