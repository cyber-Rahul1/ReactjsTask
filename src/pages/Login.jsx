import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/ContextProvider"
import { IoIosArrowBack } from "react-icons/io"


const Login = () => {
    const { email, setEmail, setPassword, password } = useContext(DataContext)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login Page"
    })

    return (
        <div className="w-screen h-screen bg-[#ffffff] flex flex-col justify-center items-center">
            <div className="px-auto md:bg-[#f7f8f9] h-[96vh] md:h-[89vh] flex flex-col justify-start py-10 md:px-5">
                <IoIosArrowBack  size={22} onClick={() => navigate("/")} className="absolute cursor-pointer text-gray-500 top-3 md:left-150 md:top-14 left-2"/>
                <div>
                    <h1 className="text-[#1d2226] text-[28px] font-semibold pb-2 tracking-tight leading-9">Signin to your<br /> PopX account</h1>
                    <p className="text-[#76797d] text-md font-medium tracking-normal leading-[27px]">Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                </div>
                <form className="flex flex-col mt-8">
                    <div className="flex flex-col relative pb-5" >
                        <input
                            required
                            value={email}
                            ref={inputRef3}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className={`mb-1 border-1 border-[#cbcbcb] rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]`}
                        />
                        <p onClick={() => inputRef3.current.focus()} className={`${email ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-white md:bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4 text-[#1d22267a]'} text-sm absolute  transition-all duration-200 ease-in-out`}>{email ? 'Email address' : 'Enter email address'}</p>

                    </div>
                    <div className="flex flex-col relative" >
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} ref={inputRef4} type="password" className="mb-4 border-1 border-[#cbcbcb] rounded-[6px] w-84 px-4 py-[9px] focus:outline-none text-sm text-[#1d2226]" />
                        <p onClick={() => inputRef4.current.focus()} className={`${password ? '-top-[10px] font-medium text-[#722fff] text-[12px] rounded-sm bg-white md:bg-[#f7f8f9] pr-6 pl-[6px] left-2' : 'top-[10px] left-4 text-[#1d22267a]'}  text-sm absolute  transition-all duration-200 ease-in-out`}>{password ? 'Password' : 'Enter password'}</p>
                    </div>
                    <button onClick={(e) => { e.preventDefault(); setEmail(""); setPassword(""); navigate("/account") }} disabled={!password || !email} className={` ${password && email ? ' bg-[#6c25ff]  active:scale-95 hover:bg-[#5125ffc2]' : ' bg-[#3130312c]'} relative overflow-hidden group  text-[#ffffff] px-19 py-[11.5px] text-[15px] rounded-md mb-2 border-none font-medium tracking-normal cursor-pointer   transition-all duration-300`}>
                        {password && email && (
                            <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="w-full h-full block animate-gradientMove rounded-md" />
                            </span>
                        )}
                        <span className="relative z-10">Login</span>
                    </button>
                </form>
               <div className="text-center mb-5">
                    <p className="text-[#1d2226] text-sm pb-4">Don't have an account? <span onClick={() => navigate("/signup")} className="text-[#6c25ff] font-semibold cursor-pointer">Signup</span></p>
               </div>
            </div>
        </div>
    )
}

export default Login
