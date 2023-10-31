import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'

function Footer() {
    return (
        <div className=" py-5 bg-slate-800 text-center text-gray-200 rounded-lg">
            <h1 className="text-2xl mb-2">Contact Me</h1>
            <div className="flex flex-row items-center justify-center gap-10 text-xl">
                <label htmlFor="">
                    <span className="infor_contact">
                        <AiOutlineMail className="text-2xl" />
                        <h3 className="ml-1">Email</h3>
                    </span>
                    <p>email@email.com</p>
                </label>
                <label htmlFor="">
                    <span className="infor_contact">
                        <FiPhone className="text-2xl" />
                        <h3 className="ml-1">Phone</h3>
                    </span>
                    <p>(+84)123456789</p>
                </label>
                <label htmlFor="">
                    <span className="infor_contact">
                        <CiLocationOn className="text-2xl" />
                        <h3 className="ml-1">Address</h3>
                    </span>
                    <p>Viet Nam</p>
                </label>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mt-2 text-3xl">
                <a href="">
                    <AiFillGithub />
                </a>
                <a href="">
                    <AiFillLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
