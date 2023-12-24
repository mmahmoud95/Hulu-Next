import {
    HandThumbDownIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
    const baseURL = "https://image.tmdb.org/t/p/original";
    return (
        <div
            ref={ref}
            className='group cursor-pointer transition duration-100 ease-in-out transform sm:hover:scale-105 p-2 hover:z-50'
        >
            <Image
                src={`${baseURL}${result.backdrop_path || result.poster_path}`}
                alt={result.title}
                width={1920}
                height={1080}
            />
            <div className='p-4'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {result.title}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.release_date} ◦
                    <HandThumbUpIcon className='h-5 mx-2 text-white' />
                    {result.vote_count}
                </p>
            </div>
        </div>
    );
});

export default Thumbnail;
