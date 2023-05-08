
const Medal = ({rank}) => {

    const ranks = {
        '8 kyu' : 'border-gray-400',
        '7 kyu' : 'border-gray-600',
        '6:kyu' : 'border-yellow-500'
      }


  return (
    <div>
        <div className={`w-10 h-10 border-2 rounded-full bg-slate-500  ${ranks[rank]}`}></div>
    </div>
  )
}

export default Medal