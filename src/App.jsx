import About from "./components/About/About"
import Category from "./components/Category/Category"
import Contact from "./components/Contact/Contact"
import Success from "./components/Success/Success"
import Testimonials from "./components/Testimonials/Testimonials"
import ContactPage from "./page/ContactPage/ContactPage"


function App() {


  return (
   <div>
    <Category />
    <About />
    <Success />
    <Testimonials />
    <Contact />
    <ContactPage />
   </div>
  )
}

export default App
