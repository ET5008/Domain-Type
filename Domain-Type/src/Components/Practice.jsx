import '../App.css'

export default function Practice() {
    let wordString = "one’s that ropes darkness impure bon amplification simple and light emerge revealing blacker domain curtain barrier which between and binding blossom back expansion the from barrier barrier darkness hollow purify hand domain nine basket domain than empty crow pure falling wicker vow polarized front emotion is overtime declaration"
    let wordLength = wordString.length;
    
    let domainHeight = 50;
    let domainWidth = 50;
    let circleX = 25;
    let circleY = 25;

    function randomWord() {
        
    }

    function newGame() {

    }

    return(
        <main className='flex flex-col justify-center items-center mt-42'>
            <div className='flex flex-col items-center'>
                <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                    <circle r="22.5" cx="25" cy="25" fill="#ffffff" stroke='gray' strokeWidth={1}/>
                </svg>
                <h2 className='text-2xl mt-6 text-[#1075A3] font-medium'>Start typing to expand your domain</h2>
            </div>
            <div className='mt-12 mb-4 flex flex-row justify-between w-full px-32'>
                <div id='time' className='text-white text-4xl font-medium'>0</div>
                <button className='text-white text-xl bg-[#BB264E] p-2 rounded-2xl'>New Game</button>
            </div>
            <p id='typing-input' className='mx-32 text-4xl text-[#22C2B5] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae blanditiis veniam praesentium! Nostrum mollitia laboriosam cum neque tempora explicabo eius, in iusto quia est quas assumenda nulla officia voluptates?</p>
        </main>
    )
}