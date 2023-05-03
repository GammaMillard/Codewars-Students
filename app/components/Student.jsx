'use client'




const Student = ({student : {name, honor, ranks : {overall : { rankName }}}, img}) => {

   

  return (
    <div className="bg-[hsl(240,4.92%,11.96%)] text-white p-5">
        <p>{name}</p>
        <img className="w-32 h-32" src={img} alt="" />
    </div>
  )
}

export default Student