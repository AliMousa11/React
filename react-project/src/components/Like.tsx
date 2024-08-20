import { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <IoIosHeart color="red" size={30} onClick={() => setStatus(false)} />
    );
  return <IoIosHeartEmpty size={30} onClick={() => setStatus(true)} />;
};

export default Like;
