import Image from "next/image";
import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <FlipMove className='px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 justify-center flex-wrap 3xl:flex '>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    );
}

export default Results;
