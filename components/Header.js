import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
    MagnifyingGlassIcon,
    CheckBadgeIcon,
    HomeIcon,
    UserIcon,
    BoltIcon,
    RectangleStackIcon,
} from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderIcon Icon={HomeIcon} title='Home' />
                <HeaderIcon Icon={BoltIcon} title='Trending' />
                <HeaderIcon Icon={CheckBadgeIcon} title='Verified' />
                <HeaderIcon Icon={RectangleStackIcon} title='Collections' />
                <HeaderIcon Icon={MagnifyingGlassIcon} title='Search' />
                <HeaderIcon Icon={UserIcon} title='Account' />
            </div>
            <Image
                className='object-contain'
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}
                alt='Hulu'
            />
        </header>
    );
}

export default Header;
