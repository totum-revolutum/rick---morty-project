import Link from 'next/link';

export const NavMenu = () => {
  const menuList = [
    {
      href: '/characters',
      label: 'Characters',
    },
    {
      href: '/episode',
      label: 'Episode',
    },
    {
      href: '/location',
      label: 'Location',
    },
  ];

  return (
    <nav>
      <ul className='flex items-center gap-12'>
        {menuList.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
