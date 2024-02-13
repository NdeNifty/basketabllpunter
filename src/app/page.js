import Image from 'next/image'
import Header from './components/header';
import { Inter } from 'next/font/google'

import axios from "axios";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Home = () => {
  
  return (
    <div className={inter.className}>
       <div className='mx-auto'> 
    <Header />
   <div>Sample</div>
   </div>
    </div>
   
  );
};
export default Home;
 