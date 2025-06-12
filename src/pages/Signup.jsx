import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/ContextProvider"
import { IoIosArrowBack } from "react-icons/io";


const Signup = () => {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)
    const navigate = useNavigate()
    const { fullName,
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
        setIsAgency, } = useContext(DataContext)

    // Validation states
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) {
            return "Email is required"
        }
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address"
        }
        return ""
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/
        if (!phone) {
            return "Phone number is required"
        }
        if (!phoneRegex.test(phone)) {
            return "Please enter a valid 10-digit phone number"
        }
        return ""
    }

    // Handle email validation
    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
        setEmailError(validateEmail(value))
    }

    const handleEmailBlur = () => {
        setEmailError(validateEmail(email))
    }

    // Handle phone validation
    const handlePhoneChange = (e) => {
        const value = e.target.value
        setPhoneNumber(value)
        setPhoneError(validatePhoneNumber(value))
    }

    const handlePhoneBlur = () => {
        setPhoneError(validatePhoneNumber(phoneNumber))
    }




    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()


        const emailValidationError = validateEmail(email)
        const phoneValidationError = validatePhoneNumber(phoneNumber)

        setEmailError(emailValidationError)
        setPhoneError(phoneValidationError)


        if (!emailValidationError && !phoneValidationError) {


            navigate("/account")
        }
    }



    useEffect(() => {
        document.title = "Signup Page"

    })

    return (
        <div className="w-screen h-screen bg-[#ffffff] flex flex-col justify-center items-center">
            <div className="md:bg-[#f7f8f9] h-[90vh] md:h-[89vh] flex flex-col justify-start py-10  px-auto md:px-5 relative">
                <IoIosArrowBack  size={22} onClick={() => navigate("/")} className="absolute cursor-pointer text-gray-500 md:-top-0 -top-2 md:-left-40 -left-2"/>
                <h1 className="text-[#1d2226] text-[28px] font-semibold tracking-tight  pb-7 leading-9">Create your<br /> PopX account</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col relative" >
                        <input required value={fullName} onChange={(e) => setFullName(e.target.value)} ref={inputRef1} type="text" className="mb-4 border-1 border-[#cbcbcb] rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]" />
                        <p onClick={() => inputRef1.current.focus()} className={`${fullName ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4'} text-[#1d2226be] text-sm absolute  transition-all duration-200 ease-in-out`}>Full Name<span className="text-red-600">*</span></p>
                    </div>
                    <div className="flex flex-col relative pb-3" >
                        <input
                            required
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            onBlur={handlePhoneBlur}
                            ref={inputRef2}
                            type="tel"
                            className={`mb-1 border-1 ${phoneError ? 'border-red-500' : 'border-[#cbcbcb]'} rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]`}
                        />
                        <p onClick={() => inputRef2.current.focus()} className={`${phoneNumber ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4'} text-[#1d2226be] text-sm absolute  transition-all duration-200 ease-in-out`}>Phone number<span className="text-red-600">*</span></p>
                        {phoneError && <span className="text-red-500 text-xs mb-3">{phoneError}</span>}
                    </div>
                    <div className="flex flex-col relative pb-3" >
                        <input
                            required
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur}
                            ref={inputRef3}
                            type="email"
                            className={`mb-1 border-1 ${emailError ? 'border-red-500' : 'border-[#cbcbcb]'} rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]`}
                        />
                        <p onClick={() => inputRef3.current.focus()} className={`${email ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4'} text-[#1d2226be] text-sm absolute  transition-all duration-200 ease-in-out`}>Email address<span className="text-red-600">*</span></p>
                        {emailError && <span className="text-red-500 text-xs mb-3">{emailError}</span>}
                    </div>
                    <div className="flex flex-col relative" >
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} ref={inputRef4} type="password" className="mb-4 border-1 border-[#cbcbcb] rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]" />
                        <p onClick={() => inputRef4.current.focus()} className={`${password ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4'} text-[#1d2226be] text-sm absolute  transition-all duration-200 ease-in-out`}>Password<span className="text-red-600">*</span></p>
                    </div>
                    <div className="flex flex-col relative" >
                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} ref={inputRef5} type="text" className="mb-2 border-1 border-[#cbcbcb] rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]" />
                        <p onClick={() => inputRef5.current.focus()} className={`${companyName ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4'} text-[#1d2226be] text-sm absolute  transition-all duration-200 ease-in-out`}>Company name</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-[#1d2226] mb-[10px] text-xs">Are you an Agency?<span className="text-red-600">*</span></p>
                        <div className="flex items-center gap-[22px]">
                            <label className="flex items-center">
                                <input type="radio" name="agency" value="yes" checked={isAgency === "yes"} onChange={(e) => setIsAgency(e.target.value)} className="mr-3 w-[22px] h-[22px] accent-[#6c25ff] tracking-tight" defaultChecked />
                                <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="agency" value="no" checked={isAgency === "no"} onChange={(e) => setIsAgency(e.target.value)} className="mr-3 w-[22px] h-[22px] accent-[#6c25ff]" />
                                <span className="text-sm">No</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-[#6c25ff] text-[#ffffff] px-19 py-[11.5px] text-[15px] rounded-md mt-47 mb-2 border-none font-medium tracking-normal cursor-pointer active:scale-95 hover:bg-[#5125ffc2] transition-all duration-300 relative overflow-hidden group ">
                        <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="w-full h-full block animate-gradientMove rounded-md" />
                        </span>
                        <span className="relative z-10">Create Account</span></button>
                </form>
                <div className="text-center ">
                    <p className="text-[#1d2226] text-sm pb-4">Already have an account? <span onClick={() => navigate("/login")} className="text-[#6c25ff] font-semibold cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
