import React from 'react'
import { NavLink } from 'react-router-dom';
const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

// activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-6">
    {links.map(({ url, text }, index) => (
      <NavLink to={url} key = {index}className="m-2 border-2 rounded-3xl border-slate-500 p-2 mb-0">{text}</NavLink>
    ))}
  </div>
);