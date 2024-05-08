import '../App/App.css'
import ContactFrom from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList"

function App() {

  return (
    <>
      <h1>Phone Book</h1>
      <ContactFrom />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App
