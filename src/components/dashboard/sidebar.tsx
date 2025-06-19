import { SidebarClose } from "lucide-react";

const navItems = [
  {
    name: 'Overview',
  },
  {
    name: 'Balances',
  },
  {
    name: 'Transactions',
  },
  {
    name: 'Bills',
  },
  {
    name: 'Expenses',
  },
  {
    name: 'Goals',
  },
  {
    name: 'Settings',
  },
];

export default function Sidebar() {
  return (
    <aside className='min-w-64 bg-black-1 text-white-1 flex flex-col py-4 px-4'>
      {/* SIDEBAR HEADER */}
      <div className='flex justify-center items-center gap-4'>
        {/* APP NAME */}
        <h1 className='text-green-1 text-3xl'>
          <span className='font-extrabold '>FIN</span>
          <span className='font-thin'>track.</span>
          <span className='font-extrabold'>IO</span>
        </h1>

        {/* SIDEBAR CLOSE BUTTON */}
        <div className=''>
          <SidebarClose />
        </div>
      </div>

      {/* SIDEBAR MAIN nav */}
      <nav>
        <ul className='flex flex-col'>
          {navItems.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </nav>

      {/* SIDEBAR FOOTER */}
      <div>
        <div></div>
      </div>
    </aside>
  );
}
