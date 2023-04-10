import React from "react";

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
                Saravanan Gowthaman
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'>
            Software Engineer & Computer Science Student 
            </p>
            <p className='text-sm max-w-xl mb-6 font-bold' > 
            I'm a master's student in computer science at Northeastern University,
             with a bachelor's degree in computer science from Amrita University.
              I have experience developing microservices, REST APIs using Java, SpringBoot, and UI using Angular and React.
               In my spare time, I enjoy setting records in Rubik's cube speedsolving and cycling long distances.
            </p>
        </div>
    )
}

export default Intro;