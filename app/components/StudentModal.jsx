'use client'

const StudentModal = ({ openModal, setOpenModal }) => {

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-modal-backdrop">
      <div className="relative flex flex-col justify-center items-start gap-4 w-1/2 p-8 bg-[hsl(240,4.92%,11.96%)] text-white rounded">
        <img src={`https://www.codewars.com/users/${openModal.username}/badges/large`} alt="" className="w-full" />
        <p className="w-full pb-2 text-xl font-bold border-b border-gray-600">Personal Information:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
          <p>Name: {openModal.name}</p>
          <p>Honor: {openModal.honor}</p>
          <p>Clan: {openModal.clan ? openModal.clan : "this user hasn`t join any clan yet"}</p>
        </div>
        <p className="w-full pb-2 text-xl font-bold border-b border-gray-600">Stats:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
          <p>Leaderboard Position: {openModal.leaderboardPosition}</p>
          <p>Rank: {openModal.ranks.overall.name}</p>
          <p>Score: {openModal.ranks.overall.score}</p>
          <p>Katas completed: {openModal.codeChallenges.totalCompleted}</p>
          <p>Katas authored: {openModal.codeChallenges.totalAuthored}</p>
        </div>
        <p className="w-full pb-2 text-xl font-bold border-b border-gray-600">Languages:</p>
        <div className="flex flex-col justify-center items-start gap-4 pl-4">
          {Object.keys(openModal.ranks.languages).map((language, i) => {
            return (
              <div key={i} className="flex justify-start items-center gap-4">
                <p className="text-lg font-regular text-gold">{language}</p>
                <p>Rank: {openModal.ranks.languages[language].name}</p>
                <p>Score: {openModal.ranks.languages[language].score}</p>
              </div>
            )
          })}
        </div>
        <button onClick={() => setOpenModal({ isActive: false })} className="absolute top-0 left-0 w-10 h-10 text-3xl text-white">x</button>
      </div>
    </div>
  )
}

export default StudentModal