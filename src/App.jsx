import Navbar from './component/Navbar'
import Main from './component/Main.jsx'
import Features from './component/Features'
import { Route, Routes } from 'react-router-dom'
import Sentiment from './component/sentiment.jsx'
import Churn from './component/Churn.jsx'
import Social from './component/Social.jsx'
import Fake from './component/Fake.jsx'
import Meme from './component/Meme.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'
import About from './component/About.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/sentiment' element={<Sentiment />} />
        <Route path='/churn' element={<Churn />} />
        <Route path='/social' element={<Social />} />
        <Route path='/fake' element={<Fake />} />
        <Route path='/meme' element={<Meme />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
