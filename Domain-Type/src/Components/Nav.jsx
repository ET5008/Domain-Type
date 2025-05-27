import '../App.css'
import infiniteVoid from '../imgs/infiniteVoid.svg';

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-[#0B4C6A] py-6 px-16">
            <div className='flex flex-row items-center'>
                <h1 className='text-3xl text-white font-medium'>Domain Type</h1>
                <div className='justify-around flex items-center'>
                    <img src={infiniteVoid} alt="Infinite Void" className='w-20 mt-4'/>
                    {/* <img src="fuga.svg" alt="Player vs player button icon" />
                    <img src="shrine.svg" alt="Account stats button icon" /> */}
                    <img src="gear.svg" alt="Settings button icon" />
                </div>
            </div>
            <img src="profile.svg" alt="profile button icon" />
        </nav>
    )
}