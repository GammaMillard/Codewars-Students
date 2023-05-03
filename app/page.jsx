import List from "./components/List";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[hsl(240,10.2%,9.61%)]">
      {/* <div className="absolute top-24 left-24">
        <img src="https://dev.codewars.com/images/logo-220ae435.png" alt="" />
      </div> */}
      <List />
    </main>
  )
}
