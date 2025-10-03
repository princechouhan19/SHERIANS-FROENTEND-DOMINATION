// In main.jsx, replace this line with:
// import App from './Lecture/PROPS/Exercise/app.jsx'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  // Initial data array containing song objects with image, title, artist, and added status
  const data = [
    { image: 'https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f', title: 'Millionaire', artist: 'Yo Yo Honey Singh', added: false },
    { image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png', title: 'Shape of You', artist: 'Ed Sheeran', added: false },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL_R1VQvWKnihQBKr0yKXEj19XWpXM2_dXw&s', title: 'Jhol', artist: 'Maanu, Annural Khalid, Xulfi', added: false },
    { image: 'https://i1.sndcdn.com/artworks-000178696713-pifi3d-t500x500.jpg', title: 'Let Me Love You', artist: 'Justin Bieber', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/9584adba28c924ddfd7a231d60d9471b/0x1900-000000-80-0-0.jpg', title: 'Avicii Forever', artist: 'Avicii', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/f16219b67c26a007a5bb1a502914162b/0x1900-000000-80-0-0.jpg', title: 'Lotus', artist: 'Little Simz', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/5319ef0576922cb06cdb0710b48b9988/1900x1900-000000-81-0-0.jpg', title: 'Everest', artist: 'Halestorm', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/237e4bd78cbbaab2c8b47e34d54b2412/0x1900-000000-80-0-0.jpg', title: 'The Clearing', artist: 'Wolf Alice', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/bc836c9986e8a3babae894b8b8ea7d1a/0x1900-000000-80-0-0.jpg', title: 'A Matter of Time', artist: 'Laufey', added: false },
    { image: 'https://cdn-images.dzcdn.net/images/cover/78da94da4ebbd4c3b19ef52a8b3c5e23/1900x1900-000000-80-0-0.jpg', title: 'More Chaos', artist: 'Ken Carson', added: false }
  ];

  // State to manage the song data array
  const [songData, setSongData] = useState(data);

  // Handler function to toggle the 'added' status of a song by index
  const handelClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        // Toggle the added status for the item matching the provided index
        if (itemindex === index) {
          return { ...item, added: !item.added }
        }
        return item;
      })
    })
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-white-100 to-orange-100'>
        {/* Pass the entire songData array to Navbar component */}
        <Navbar data={songData} />
        <div className='px-20 flex gap-29 mt-20 flex-wrap'>
          {/* Map through songData to render Card components for each song */}
          {/* Pass individual song object, click handler, and index to each Card */}
          {songData.map((obj, index) => (
            <Card data={obj} handelClick={handelClick} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App