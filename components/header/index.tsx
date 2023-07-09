import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>KVStore App</h1>
      <nav className="header__nav">
        <ul>
          <li><Link href={`/form`}>Form</Link></li>
          <li><Link href={`/queue`}>Queue</Link></li>
        </ul>
      </nav>
    </header>
  )
}