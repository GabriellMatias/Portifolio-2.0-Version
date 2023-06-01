export function Header() {
  return (
    <header className="flex flex-1 rounded-b-xl justify-between py-8 px-28 font-semibold bg-[#1b1438]">
      <a
        href="/"
        className="text-2xl transition-colors duration-300 font-extrabold text-white hover:text-blue-200"
      >
        Console.log("GabriellMatias")
      </a>
      <ul className="list-none text-xl flex gap-4 items-center">
        <li>
          <i className="ri-apple-fill"></i>
        </li>
        <li>
          {' '}
          <a href="" className="link">
            Home
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="" className="link">
            About - Me{' '}
          </a>
        </li>
        <li>
          {' '}
          <a href="" className="link">
            Technologies
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="" className="link">
            Projects
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="" className="link">
            Contact
          </a>{' '}
        </li>
      </ul>
    </header>
  )
}
