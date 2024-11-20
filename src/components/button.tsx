import { Link } from "react-router-dom"

// interface RoundButtonProps {
//   to: string
//   children: React.ReactNode
// }

// export const RoundButton: React.FC<RoundButtonProps> = ({ to, children }) => {
//   return (
//     <Link
//       className="block border-gray-400 bg-black px-6 py-3 rounded-full w-full text-center text-white"
//       to={to}
//     >
//       {children}
//     </Link>
//   )
// }


// export default RoundButton
interface LinkButtonProps {
  to: string
  children: React.ReactNode
}

 const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
        <Link
          to={to}
          className="px-1 py-3 border-b-2 w-full"
          >
      {/* <h1 className="flex flex-row w-full text-black">{children}</h1> */}
      {children}
    </Link>
  )
}
export default LinkButton