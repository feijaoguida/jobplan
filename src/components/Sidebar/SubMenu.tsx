import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SubMenu({data}:any) {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  return (
    <>
      <li 
        className={`link ${pathname.includes(data.name) && 'active'}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flesx-1">{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && "rotate-180"} duration-200`} />
      </li>
      <motion.ul 
        animate={
          subMenuOpen ? { height: "fit-content"} : { height: 0,}
        }
        className="flex flex-col pl-14 text-[0.8rem] font-normal
      overflow-hidden ">
        {
          data.menus.map((menu: any) => (
            <li key={menu}>
              <Link href={`/${data.name}/${menu}}`}
              className="link !bg-transparent capitalize" >
                {menu}
              </Link>
            </li>
          ))
        }
      </motion.ul>
    </>
  )
}