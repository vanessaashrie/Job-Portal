import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJobs from './Pages/ApplyJobs'
import Applications from './Pages/Applications'
import RecruiterLogin from './Components/RecruiterLogin'
import { AppContext } from './Context/AppContext'
import Dashboard from './Pages/Dashboard'
import AddJob from './Pages/AddJob'
import ManageJobs from './Pages/ManageJobs'
import ViewApplications from './Pages/ViewApplications'
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const {showRecruiterLogin, companyToken} = useContext(AppContext)
  return (
    <div>
       { showRecruiterLogin && <RecruiterLogin/>}
       <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apply-job/:id' element={<ApplyJobs/>} />
        <Route path='/applications' element={<Applications/>} />
        <Route path='/dashboard' element={<Dashboard/>}>
        {companyToken ? <>
        <Route path='add-job' element={<AddJob/>}/>
            <Route path='manage-jobs' element={<ManageJobs/>}/>
            <Route path='view-applications' element={<ViewApplications/>}/>
        </> : null}
            
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App
