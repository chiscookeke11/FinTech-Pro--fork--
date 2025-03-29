"use client"



import Link from "next/link"
import LoginModal from "./LoginModal"
import { useState } from "react"
import RegisterModal from "./RegisterModal"



export default function Header() {
 const [OpenLogin, setOpenLogin] = useState(false)
 const [openRegister, setOpenRegister] = useState(false)


 const handleOpenLogin = () => {
    setOpenLogin(true)
    setOpenRegister(false)
 }

 const handleOpenRegister = () => {
    setOpenRegister(true)
    setOpenLogin(false)
 }

 const openRegisterModal = () => {
    setOpenLogin(false)
    setOpenRegister(true)
 }


 const openLoginModal = () => {
    setOpenLogin(true)
    setOpenRegister(false)
 }


return(
    <div className="py-5 px-6 shadow flex items-center justify-between">
        <h1 className="font-bold text-lg">FinTech Pro</h1>
        <div className="flex items-center gap-2 text-sm text-gray-900">
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600" >Features </Link>
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600" >Pricing </Link>
            <Link href=' ' className=" py-2 px-4 hover:text-gray-600 ">About </Link>
            <button onClick={handleOpenLogin } className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer " >Login </button>
            <button  onClick={handleOpenRegister}  className="bg-gray-900 text-gray-100 hover:bg-gray-800 py-2 px-4 rounded cursor-pointer" >Register </button>


        </div>




       <LoginModal
        OpenLogin={OpenLogin}
         onClose={() => setOpenLogin(false)}
         openRegisterModal ={openRegisterModal}
         />
        <RegisterModal
        openRegister = {openRegister}
         onClose = {() => setOpenRegister(false)}
         openLoginModal={openLoginModal}
          />

    </div>
)
}