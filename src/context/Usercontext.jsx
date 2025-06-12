import { useState } from "react"
import { DataContext } from "./ContextProvider"

const Usercontext = ({children}) => {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [isAgency, setIsAgency] = useState("yes");
    

  return (
      <DataContext.Provider value={{
          fullName,
          setFullName,
          phoneNumber,
          setPhoneNumber,
          email,
          setEmail,
          companyName,
          setCompanyName,
          password,
          setPassword,
          isAgency,
          setIsAgency,
      }}>
          {children}
    </DataContext.Provider>
  )
}

export default Usercontext
