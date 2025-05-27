import '../App.css'

export default function Practice() {
    return(
        <main className='flex flex-col justify-center items-center mt-42'>
            <div className='flex flex-col items-center'>
                <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                    <circle r="22.5" cx="25" cy="25" fill="#ffffff" stroke='gray' strokeWidth={1}/>
                </svg>
                <h2 className='text-2xl mt-6 text-[#1075A3] font-medium'>Start typing to expand your domain</h2>
            </div>
            <p id='typing-input' className='mx-32 text-4xl text-[#22C2B5] font-semibold mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae blanditiis veniam praesentium! Nostrum mollitia laboriosam cum neque tempora explicabo eius, in iusto quia est quas assumenda nulla officia voluptates?</p>
        </main>
    )
}