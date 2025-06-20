import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Landing = () => {

    let navigate = useNavigate()

    useEffect(() => {
        document.title = "Landing Page"
    })

    return (
        <div className="w-screen h-[94vh] bg-[#ffffff] flex flex-col justify-center items-center">
            <div className="md:bg-[#f7f8f9] h-[96%] md:h-[89%] flex flex-col justify-end py-7 md:py-10 px-auto md:px-5">
                <div>
                    <h1 className="text-[#1d2226] text-[28px] font-semibold pb-1 tracking-tight">Welcome to PopX</h1>
                    <p className="text-[#76797d] text-md font-medium tracking-wide leading-[25px]">Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col justify-center gap-[5px]">
                    <button onClick={() => navigate("/signup")} className="bg-[#6c25ff] text-[#ffffff] px-17 py-[11.5px] text-[16px] rounded-md mt-7 border-none font-medium tracking-tight cursor-pointer relative overflow-hidden group  active:scale-95 hover:bg-[#5125ffc2] transition-all duration-300 ">
                        <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="w-full h-full block animate-gradientMove rounded-md" />
                        </span>
                        <span className="relative z-10">Create Account</span></button>
                    <button onClick={() => navigate("/login")} className="bg-[#cebafb] relative overflow-hidden group  text-[#1d2226] px-17 py-[11.5px] text-[16px] rounded-md mt-1 border-none font-semibold tracking-tight cursor-pointer active:scale-95 hover:bg-[#cdbafbb5]  transition-all duration-300 hover:text-[#1d2226e4]">Already Registered? Login</button>
                </div>

            </div>
        </div>
    )
}

export default Landing
