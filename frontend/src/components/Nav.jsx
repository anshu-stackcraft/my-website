import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
    const [open, setOpen] = useState(false);


    const baseLink = "relative text-sm text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform duration-500 text-orange-500 ";

    const activeLink = "text-orange-500 after:scale-x-100";

    return (
        <>
            {/* TRANSPARENT NAV */}
            <nav className=" fixed top-0 left-0 w-full z-50 bg-transparent">
                <div className="flex items-center justify-between px-6 py-4">

                    {/* Name / Logo */}

                    <NavLink
                        to="/"
                        className="relative text-sm lg:text-xl font-bold text-white
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-full after:h-0.5 after:bg-orange-500
             after:scale-x-0 hover:after:scale-x-100
             after:origin-left after:transition-transform duration-500"
                    >
                        Portfolio <span className="text-orange-500">Website</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${baseLink} ${activeLink}` : baseLink
                            }
                        >
                            Home
                        </NavLink>
                          <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? `${baseLink} ${activeLink}` : baseLink
                            }
                        >
                            Projects
                        </NavLink>
                          <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? `${baseLink} ${activeLink}` : baseLink
                            }
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/login"
                            className="group flex items-center gap-3 border border-white px-5 py-2 rounded-full 
             text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="font-medium">
                                Get in Touch
                            </span>

                            {/* Orange Circle */}
                            <span
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500
               text-white text-lg
               group-hover:rotate-45
               transition-all duration-300 ease-out active:scale-95"
                            >
                                ↑
                            </span>
                        </NavLink>

                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-3xl text-white"
                    >
                        ☰
                    </button>
                </div>


                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden absolute top-full left-0 w-full
                        bg-black/90 backdrop-blur
                        px-6 py-6 space-y-4
                        z-[999]">

                        <NavLink to="/" onClick={() => setOpen(false)} className="block text-white">
                            Home
                        </NavLink>

                        <NavLink to="/projects" onClick={() => setOpen(false)} className="block text-white">
                            Projects
                        </NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)} className="block text-white">
                            About
                        </NavLink>

                        <NavLink to="/login" onClick={() => setOpen(false)} className="block text-white ">
                            Get in Touch
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    );
}
