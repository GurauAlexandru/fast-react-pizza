/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export const loader = async () => await getMenu();

export default Menu;

// export async function loader() {
//   const menu = await getMenu();
// }

// FROM COUSE [if my implementation won't work, activate this one]
// const loader = async () => {
//   const menu = await getMenu();
//   return menu;
// };
