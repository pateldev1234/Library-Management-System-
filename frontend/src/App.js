import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Libh from './component/header/Libh';
import Browsebook from './component/browsebook/Browsebook';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import { React, useContext, useState ,useEffect} from 'react'
import Top from './component/top/Top';
import Add from "./component/browsebook/Add"
import Add1 from './component/exploremember/Add1';
import Exploremember from './component/exploremember/Exploremember';
import Issuebook from './component/issuebook/Issuebook';
import Returnbook from './component/returnbook/Returnbook';
import Seebook from './component/browsebook/Seebook';
import Deletebook from './component/browsebook/Deletebook';
import Seethebook from './component/browsebook/Seethebook';
import Member from './component/browsebook/Member';
import Deltee from './component/browsebook/Deltee';
import Seemember from './component/exploremember/Seemember';
import Book from './component/exploremember/Book';
import Deletemember from './component/exploremember/Deletemember';
import Delteee from './component/exploremember/Delteee';
import SeeTheMember from './component/exploremember/Seethemember';
import Cleardebit from './component/cleardebit/Cleardebit';
import Doesnot from './component/doesnot/Doesnot';

function App() {
  return (
    <>  
            <Routes>
                <Route path='/' element= {<Top/>}></Route>
                <Route path="/browsebook" element={<Browsebook />} />
                <Route path='/addthedata' element={<Add/>}></Route>
                <Route path='/exploremember' element={<Exploremember/>}></Route>
                <Route path='/addthemember'  element = {<Add1/>}></Route>
                <Route path='/issuebook'  element = {<Issuebook/>}></Route>
                <Route path='/returnbook'  element = {<Returnbook/>}> </Route>
                <Route path='/seethedata'   element = {<Seebook/>}></Route>
                <Route path='/deletethedata' element = {<Deletebook/>}></Route>
                <Route path='/seetbook/:title' element = {<Seethebook/>}></Route>
                <Route path='/seetmember/:title' element = {<Member/>}></Route>
                <Route path='/deletedata/:title' element= {<Deltee/>}></Route>
                <Route path='/seethemember' element={<Seemember/>}></Route>
                <Route path='/seettbook/:fname' element = {<Book/>}></Route>
                <Route path='/deletethemember'  element = {<Deletemember/>}></Route>
                <Route path='/deletedat/:fname' element = {<Delteee/>}> </Route>
                <Route path='seettmember/:fname' element = {<SeeTheMember/>}></Route>
                <Route path='cleardebit' element = {<Cleardebit/>}></Route>
                <Route path='nodata' element={<Doesnot/>}></Route>
            </Routes>  
    </>   
  );
}

export default App;
