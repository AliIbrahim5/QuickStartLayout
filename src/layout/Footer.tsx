import { NavLink } from "react-router-dom";



 const footeritems =[
 {name : "About", href:"/", current:false},
 { name : "Privacy Policy", href:"/Privacy_Policy", current:false},
  {name : "Licensing", href:"/Licensing", current:false},
 { name : "Contact", href:"/Contact", current:false},
 ]
const Footer = () => {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
      }
  return (
    <footer className="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800 fixed bottom-0 w-full">

          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              {footeritems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? "bg-gray-900 dark:text-white" : "",
                        "hover:underline me-4 md:me-6"
                      )
                    }
                    end
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </footer>
  )
}

export default Footer