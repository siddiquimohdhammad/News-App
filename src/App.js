import React from 'react';
import './CSS/App.css';
import Navbar from './Components/Navbar';
import BlogList from './screens/BlogList';
import BlogDetail from './screens/BlogDetail';
import CreateBlog from './screens/CreateBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<BlogList />}></Route>
          <Route path='/detail/:author' exact element={<BlogDetail />}></Route>
          <Route path='/create' exact element={<CreateBlog />}></Route>

        </Routes>
      </BrowserRouter>
      {/* <CreateBlog/> */}
      {/* <BlogList/> */}
      {/* <BlogDetail/> */}



    </div>
  );
}

export default App;
