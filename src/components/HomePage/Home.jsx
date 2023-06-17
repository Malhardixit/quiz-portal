import Topnav from '../Navbar/Topnav'
import Card from '../Card/Card'
import img from './background.png'

const array = [1,2,3,4,5]


function Home() {
  return (
    <>
        <Topnav
        coins={30}
        userName='Anish P.'/>
        {
          array.map((item,index) => {
            return(
              <Card
              key={index}
              title='Astronomy and Space quiz'
              question={15}
              time={30}
              tags = {['Stars','Space','Earth','Paid']}
              image = {img}
              />
            )
          })
        }
        
    </>
  )
}

export default Home