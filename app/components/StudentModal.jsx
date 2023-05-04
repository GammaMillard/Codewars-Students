'use client'



const StudentModal = ({setOpenModal}) => {




  return (
    <div className="absolute w-1/2 h-52 bg-slate-400 top-0 ">
        <button onClick={() => setOpenModal(false)} className="text-3xl text-black">x</button>
    </div>
  )
}

export default StudentModal