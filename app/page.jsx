import { getData } from "./utilities/utilities";
import { students } from "./utilities/students";

import List from "./components/List";

export const AllFetching = async (array) => {
  const promise = await Promise.all(array.map(async (student, i) => {
      const info = await getData(`https://www.codewars.com/api/v1/users/${student.username}`)
      info.name = students[i].name
      return info
  }))
  return promise
}


export default async function Home() {

  const cats = await getData(`https://api.thecatapi.com/v1/images/search?limit=10`)

  const data = await AllFetching(students)

  return (
    <main >
      {/* <div className="absolute top-24 left-24">
        <img src="https://dev.codewars.com/images/logo-220ae435.png" alt="" />
      </div> */}
      <List data={data} cats={cats} />
    </main>
  )
}
