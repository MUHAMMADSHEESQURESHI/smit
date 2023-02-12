import Pic from '../assests/background.jpeg'
import MediaCards from './mediaCards/MediaCards';

const Home = () =>{
  


    const cards = [
        {
            names: "REDUX-Watch",
            description: "Sports Watch Military Men Watches LED Digital Wristwatch Shockproof",
            price: "PKR:2299",
            // img: img0,
        },
        {
            names: "MY-headphone",
            description: "Fashion Wrist Watch Rubber Straps Casual Watch for Men Quartz Watches for Boys & Men",
            price: "PKR:120",
            // // img: img1,
        },
        {
            names: "MY-mic",
            description: "Brown Strap Analog Leather Watch For Men / Stylish Unique Mens Style",
            price: "PKR:999",
            // // img: img2,
        },
        {
            names: "MY-Headphone",
            description: "Yamaha Music Over the Ear Headphone Rounded-shaped HPH M82",
            price: "PKR:99",
            // // img: img3,
        },
        {
            names: "MY-Headphone",
            description: "Foldable P47 Wireless Headphones with Mic. Foldable P47 Wireless Headphones with Mic",
            price: "PKR:69",
            // // img: img4,
        },
        {
            names: "MY-Headphone",
            description: "P47 Wireless Headphones Bluetooth Stereo Head phones Foldable",
            price: "PKR:69",
            // // img: img5,
        },
        {
            names: "MY-Watch",
            description: "Sports Watch Military Men Watches LED Digital Wristwatch Shockproof",
            price: "PkR:759",
            // // img: img6,
        },
        {
            names: "MY-headphone",
            description: "Fashion Wrist Watch Rubber Straps Casual Watch for Men Quartz Watches for Boys & Men",
            price: "PKR:59",
            // // img: img7,
        },
        {
            names: "MY-mic",
            description: "Brown Strap Analog Leather Watch For Men / Stylish Unique Mens Style",
            price: "PKR:609",
            // // img: img8,
        },
        {
            names: "MY-mic",
            description: "Brown Strap Analog Leather Watch For Men / Stylish Unique Mens Style",
            price: "PKR:65",
            // // img: img9,
        },
        {
            names: "MY-mic",
            description: "Buy my products",
            price: "PKR:109",
            // // img: img10,
        },
        {
            names: "REDUX-mic",
            description: "my grocery store",
            price: "PKR:459",
            // // img: img11,
        }
    ]
   
    return(
        <>
        <div className='Contanier'>
      <img className='bg' src={Pic} alt='' />
           </div>
           <br/>
           <br/>

      <div className='Container'>
      <h3>OUR PRODUCTS</h3>
      </div>
      {
        cards.map((data)=>{
            return <MediaCards data={data}/>
        })
      }
      </>
    )
}
export default Home;
