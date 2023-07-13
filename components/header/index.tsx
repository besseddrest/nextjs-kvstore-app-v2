import Link from 'next/link'

export default function Header() {
  return (
    <header className="z-20 fixed w-full inset-0 flex bg-red-600 h-12 items-center mb-8">
      <h1 className="flex-none font-bold text-2xl text-white mx-4">KVStore App v2</h1>
      <nav className="flex-auto header__nav">
        <ul className="flex">
          <li className="flex-initial mr-4"><Link className="text-white" href={`/request`}>Create Request</Link></li>
          <li className="flex-initial mr-4"><Link className="text-white" href={`/queue`}>My Queue</Link></li>
        </ul>
      </nav>
    </header>
  )
}