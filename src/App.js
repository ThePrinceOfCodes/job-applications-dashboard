import React from 'react';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile, Stats, AllJob, AddJob, SharedLayout } from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Stats />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/jobs' element={<AllJob />} />
          <Route path='/add-job' element={ <AddJob />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={ <Error />} />
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App;
