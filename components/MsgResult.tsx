import React from "react";
import Blocks from "./Blocks";

type Props = {
  status: boolean;
};

const MsgResult = (props: Props) => {
  const msg = props.status ? "correct" : "wrong";
  return <Blocks msg={msg} />;
};

export default MsgResult;
