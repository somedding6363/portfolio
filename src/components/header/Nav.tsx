const MENU = ['All', 'About', 'Project', 'Contact'];
interface NavProps {
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}
const Nav = ({ activeId, setActiveId }: NavProps) => {
  const handleReLayout = (id: number) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return (
    <nav className="h-42 p-5 rounded-full bg-light-nav dark:bg-dark-nav relative">
      <ul className="flex">
        {MENU.map((v, i) => (
          <li
            key={i}
            onClick={() => handleReLayout(i)}
            className={`w-80 rounded-full text-center text-14 text-nowrap font-medium leading-32 hover:cursor-pointer hover:text-gray-500 z-10`}
          >
            {v}
          </li>
        ))}
      </ul>
      <div
        style={
          activeId > -1 ? { left: 5 + activeId * 80 } : { display: 'none' }
        }
        className={`w-80 absolute bg-light-nav-active dark:bg-dark-nav-active top-5 bottom-5 rounded-full transition-[left,width] duration-500 ease-in-out`}
      ></div>
    </nav>
  );
};

export default Nav;

// import { useEffect, useRef, useState } from 'react';

// const MENU = ['About', 'Project', 'Contact'];
// interface NavProps {
//   activeId: number;
//   setActiveId: React.Dispatch<React.SetStateAction<number>>;
// }
// const Nav = ({ activeId, setActiveId }: NavProps) => {
//   const navMenuRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [menuWidths, setMenuWidths] = useState<number[]>([]);
//   const [accumulationLeft, setAccumulationLeft] = useState<number[]>([]);

//   useEffect(() => {
//     const widths = navMenuRef.current.map((el) => el?.offsetWidth || 0);
//     let acc = 0;
//     const arr = [];
//     for (let i = 0; i < widths.length; i++) {
//       arr.push(5 + acc);
//       acc += widths[i];
//     }
//     setMenuWidths(widths);
//     setAccumulationLeft(arr);
//   }, []);

//   return (
//     <nav className="h-42 p-5 rounded-full bg-light-nav dark:bg-dark-nav relative">
//       <ul className="flex">
//         {MENU.map((v, i) => (
//           <li
//             key={i}
//             ref={(el) => {
//               navMenuRef.current[i] = el;
//             }}
//             onClick={() => setActiveId(i)}
//             className={`rounded-full text-14 font-medium px-15 leading-32 hover:cursor-pointer hover:text-gray-500 z-10`}
//           >
//             {v}
//           </li>
//         ))}
//       </ul>
//       <div
//         className={`absolute bg-light-nav-active dark:bg-dark-nav-active top-5 bottom-5 rounded-full transition-[left,width] duration-500 ease-in-out`}
//         style={{
//           width: menuWidths[activeId],
//           left: accumulationLeft[activeId],
//         }}
//       ></div>
//     </nav>
//   );
// };

// export default Nav;
