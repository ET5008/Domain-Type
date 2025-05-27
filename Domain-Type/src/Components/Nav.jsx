import '../App.css'

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-[#0B4C6A] py-12 px-16">
            <div className='flex flex-row'>
                <h1 className='text-3xl text-white font-medium'>Domain Type</h1>
                <div className='justify-around flex'>
                    <img src="infiniteVoid.svg" alt="practice button icon" />
                    {/* <img src="fuga.svg" alt="Player vs player button icon" />
                    <img src="shrine.svg" alt="Account stats button icon" /> */}
                    <img src="gear.svg" alt="Settings button icon" />
                </div>
            </div>
            <img src="profile.svg" alt="profile button icon" />
        </nav>
    )
}