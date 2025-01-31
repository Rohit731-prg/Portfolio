import React from 'react'

function Footer() {
  return (
    <div id='footer' className='w-full sm:h-screen h-auto px-10 sm:mt-40 pt-10 bg-black'>
        <p className='text-white text-6xl font-semibold mb-20'>GET IN TOUCH</p>
        <div className='px-20 grid sm:grid-cols-2 grid-cols-1'>
            <div>
                <p className='text-white'
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias. Laborum, laboriosam optio? Vitae nemo fugiat impedit eligendi velit autem nulla, quidem dolore molestias esse, voluptatum reiciendis voluptas. Rem, et!</p>
            </div>
            <div className='text-white px-20 grid sm:grid-cols-2 grid-cols-1'>
                <div>
                    <p>Follow Me</p>
                    
                </div>
                <div>
                    <p>Contect Me</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer