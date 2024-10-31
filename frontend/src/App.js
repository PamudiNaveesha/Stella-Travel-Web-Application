import './App.css';
import Header from './components/Header';
import AddTour from './components/AddTour';
import AllTours from './components/AllTours';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UpdateTour from './components/UpdateTour';
import Footer from './components/Footer';
import TourTable from './components/TourTable';
import Viewmore from './components/ViewMore';
import ReportTour from './components/ReportTour';
import BookTour from './components/BookTour';
import BookingTable from './components/BookingTable';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        
        <Routes>
          
          <Route path= '/' element={<AllTours/>} />
          <Route path='/addTOUR' element={<AddTour/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/updateTOUR/:id' element={<UpdateTour/>} />
          <Route path='/allTOUR-table' element={<TourTable/>} />
          <Route path='/all-table/updateTOUR/:id' element={<UpdateTour/>} />
          <Route path='/viewTOUR/:id' element={<Viewmore/>} />
          <Route path='/reportTOUR' element={<ReportTour/>} />
          <Route path='/bookTOUR' element={<BookTour/>} />
          <Route path='/all-table/bookin' element={<BookingTable/>} />
          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
