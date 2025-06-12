import { useEffect } from "react"
import { FaCamera } from "react-icons/fa";


const Account = () => {






    useEffect(() => {
        document.title = "Account Page"
    })


    return (
        <div className="w-screen h-screen bg-[#ffffff] flex flex-col justify-center items-center pt-10 md:pt-0">
            <div className="flex flex-col w-full md:w-94 relative">
                <div className="flex w-full justify-start h-10 pl-4 bg-white mt-5">
                    <h3 className="text-[18px]">Account Settings</h3>
                </div>
                <div className=" bg-[#f7f8f9] h-[96vh] gap-7 md:h-[82vh] flex flex-col justify-start py-8 px-4 md:px-5">
                    <div className="flex gap-4 ">
                        <div className=" z-2 flex flex-col items-center h-20 w-20 rounded-full " >
                            <div className="relative h-full w-full">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-full h-full w-full object-cover" />
                                <div className="absolute bottom-1 right-0 z-20 ">
                                    <FaCamera size={22} className="cursor-pointer text-[#ffffff] bg-[#6c25ff] rounded-full p-1" />
                                </div>
                            </div>
                            

                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[14px] font-medium text-[#1d2226px]">Marry Doe</h3>
                            <p className="text-[12px] text-[#4c4d4f]">Marry@Gmail.Com</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#191a1a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur eum quo. Excepturi aspernatur eum quo.</p>
                    </div>
                    
                </div>
                
                    <hr className="absolute top-71 border-t-2 border-dotted border-gray-300 w-full"></hr>
                    <hr className="absolute bottom-9 border-t-2 border-dotted border-gray-300 w-full"></hr>
              

            </div>


        </div>
    )
}

export default Account
