import Contact from "../Contact/Contact"
import style from "./ContactList.module.css"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const valueFilter = useSelector(selectNameFilter);

  const filterContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase() )
  )

  return (
    <ul className={style.tottalList}>
      {filterContacts.map((item) => (
        
        <li
          className={style.contactBorder}
          key={item.id}>
          <Contact contact={item}/>
        </li>
      ))}
    </ul>
  )
}
