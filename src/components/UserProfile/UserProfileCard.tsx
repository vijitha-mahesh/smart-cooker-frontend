import React, { useContext, useEffect, useState } from 'react';
import profileImage from '../../assets/Images/profile.png';
import { AuthContext } from '../../contexts/AuthContext';

export default function UserProfileCard() {
    const { user, dispatch } = useContext(AuthContext);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="container mx-auto my-60">
                <div>
                    <div className="bg-white relative shadow-xl w-4/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                        <div className="flex justify-center">
                            <img src={profileImage} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl text-gray-900">Lorem Ipsum</h1>

                            <p>
                                <span></span>
                            </p>

                            <div className="flex justify-evenly my-2">
                                <a href="" className="font-bold text-lg text-white w-full text-center py-3  bg-sky-700  hover:bg-slate-600 hover:text-white hover:shadow-lg">
                                    Edit Profile
                                </a>
                            </div>
                            {(user.Role == 'customer') && (
                                <div className="flex justify-evenly my-5">
                                    <a href="" className="font-bold text-lg text-white w-full text-center py-3 bg-sky-700  hover:bg-slate-600 hover:text-white hover:shadow-lg">
                                        Transaction History
                                    </a>
                                </div>
                            )}

                            <div className="w-full">
                                <h2 className="font-bold text-gray-600 text-left px-4 underline">Your Profile Information</h2>
                                <div className="mt-5 w-full">
                                    <div className=" border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">ID :</div>

                                    <div className=" border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">Name :</div>

                                    <div className=" border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">Role :</div>
                                    <div className=" border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">Phone Number:</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
