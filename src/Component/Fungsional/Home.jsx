import React from 'react';
import Blog from './Blog';

const Home = () => {
    return <div>
        <Blog
            tanggal="21 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />

        <Blog
            tanggal="21 Juni 2020"
            judul="Teknologi IOT"
            summary="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />

        <Blog
            tanggal="21 Juni 2020"
            judul="Design pattern laravel"
            summary="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />
    </div>
}

export default Home;