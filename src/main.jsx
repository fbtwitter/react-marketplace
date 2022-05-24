import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './scss/style.scss'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import PrivateRoute from './components/PrivateRoute'
import Category from './pages/Category'
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
import EditListing from './pages/EditListing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Explore />} />
          <Route path="profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="offers" element={<Offers />} />
          <Route path="category/">
            <Route path=":categoryName/" element={<Category />}></Route>
            <Route path=":categoryName/:listingId" element={<Listing />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="edit-listing/:listingId" element={<EditListing />} />
          <Route path="create-listing" element={<CreateListing />} />
          <Route path="contact/:landlordId" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
