import React from 'react'

function About() {
  const Experience = [
    {
      title: 'Personal',
      des: 'Made 10+ projects in react and tailind'
    },
    {
      title: 'SocialDrive',
      des: 'Wordpress Developer'
    },
    {
      title: 'SocialDrive',
      des: 'React Developer'
    }
  ];
  const Technologies = [
    'HTML','Css', 'Javascript', 'C', 'Cpp', 'Java', 'Python', 'SQL', 'Dart'
  ];
  const skills = [
    'React JS', 'Tailwind', 'React Native', 'Git', 'Github'
  ]
  return (
    <div
    id='about'
    className='w-full h-screen px-10 py-20'
    >
      <p className='my-20 text-6xl font-semibold'>About Me</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo id debitis cupiditate cumque, error quia! Debitis cupiditate ipsa nihil labore, earum atque dolor quos saepe vero inventore, odit nam deleniti accusantium omnis mollitia consequatur harum incidunt! Ex modi aut repudiandae doloremque commodi recusandae labore sit. Perspiciatis omnis dolor dolores fuga iusto, recusandae animi nisi consequuntur exercitationem id maxime earum pariatur voluptas! Porro non quos quae tempora fuga quis sequi minus sed sint debitis reiciendis, nostrum natus suscipit iusto odio.
      </p>
      <p className='py-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim 
      </p>

      <div className='w-2/3 flex flex-row gap-10 justify-between px-10 mt-10'>
        <div>
          <p className='font-semibold text-3xl mb-5 underline'>Experience</p>
          <div>
            {
              Experience.map((exp, index) => (
                <div key={index}>
                  <p className='font-semibold text-2xl'>{exp.title}</p>
                  <p className='pb-2 text-xl text-gray-500'>{exp.des}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <p className='font-semibold text-3xl mb-5 underline'>Technologies</p>
          <div>
            {Technologies.map((item, index) => (
              <p 
              className='text-xl text-gray-500'
              key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div>
        <p className='font-semibold text-3xl mb-5 underline'>Skills</p>
          <div>
            {skills.map((item, index) => (
              <p 
              className='text-xl text-gray-500'
              key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About