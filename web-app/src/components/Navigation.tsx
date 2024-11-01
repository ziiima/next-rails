'use client'

import ActiveLink from './ActiveLink'

export const Navigation = () => {
  return (
    <nav>
      <style jsx global>{`
        .nav-link {
          text-decoration: none;
        }

        .active:after {
          content: ' (current page)';
        }
      `}</style>
      <ul className="nav">
        <li>
          <ActiveLink activeClassName="active" className="nav-link" href="/">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            className="nav-link"
            href="/about"
          >
            About
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            className="nav-link"
            href="/about2"
          >
            About2
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            className="nav-link"
            href="/another"
          >
            Another
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            className="nav-link"
            href="/blog"
          >
            Blog
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            activeClassName="active"
            className="nav-link"
            href="/dynamic-route"
          >
            Dynamic Route
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}
