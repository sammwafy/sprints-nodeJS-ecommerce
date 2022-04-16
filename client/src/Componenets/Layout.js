import Header from "./Header/header";
import db from "../db.json"

const Layout = ({children}) => {
const data = db;
console.log(data)
  return(
    <>
    <Header items={db.NavMenuItems}/>
    {children}
    <div>footer</div>
    </>
  )
}

export default Layout