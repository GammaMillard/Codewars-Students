'use client'

const Challenge = ({ name, students, num }) => {

  return (
    <div className="text-white p-10 bg-red-500">
      <p>{name}</p>
      <div className="flex p-1 gap-3 bg-black">
        {
          students && students.map((e, i) => <p>{e}</p>)
        }
      </div>

    </div>
  )
}

export default Challenge