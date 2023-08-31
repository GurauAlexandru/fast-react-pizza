import { useSelector } from "react-redux";

// useSelector is used to get data from redux

const Username = () => {
  const { username } = useSelector((state) => state.user);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
