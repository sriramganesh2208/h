import React from 'react'
import './PropertyList.css'


function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg" alt="Hotels" className="pListimg" />
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg" alt="apartment" className="pListimg" />
        <div className='pListTitles'>
            <h1>Apartments</h1>
            <h2>2331 Hotels</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://c4.wallpaperflare.com/wallpaper/814/350/568/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg" alt="resorts" className="pListimg" />
        <div className='pListTitles'>
            <h1>Resorts</h1>
            <h2>2330 Hotels</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=" alt="villas" className="pListimg" />
        <div className='pListTitles'>
            <h1>Villas</h1>
            <h2>2338 Hotels</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://c4.wallpaperflare.com/wallpaper/812/895/685/interior-winter-cabin-window-hd-wallpaper-preview.jpg" alt="cabins" className="pListimg" />
        <div className='pListTitles'>
            <h1>Cabins</h1>
            <h2>2332 Hotels</h2>
        </div>
        </div>
    </div>
  )
}

export default PropertyList