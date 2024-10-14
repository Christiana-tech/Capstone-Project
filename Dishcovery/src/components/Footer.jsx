import { FaLinkedin, FaTwitter, FaYoutube, FaGithub} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Dish<span className="text-green-500 text-xl">Covery</span>
                    </p>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Recipes
                        </a>
                    </div>
                </div>

               <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                       
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Copyright Information
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href='#'
                            className='bg-black-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-black-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-black-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-black-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                
                </div>
            </div>

            <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">Tiana &copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer