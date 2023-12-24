import requests from "@/utils/requests";
import { useRouter } from "next/router";

function Nav() {
    const router = useRouter();
    return (
        <nav className='relative'>
            <div className='scrollbar-hide flex whitespace-nowrap sm:px-12 px-10 text-2xl space-x-10 sm:space-x-16 overflow-x-scroll overflow-y-hidden'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        onClick={() => {
                            router.push(`/?genre=${key}`);
                        }}
                        key={key}
                        className='last:pr-24  active:text-red-600
                                 cursor-pointer transition duration-100
                                   transform hover:scale-125 hover:text-white'
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12' />
        </nav>
    );
}

export default Nav;
