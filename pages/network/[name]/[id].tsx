import { useRouter } from "next/router";
import React from "react";

function NetworkId() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>{id}dsdsd</div>;
}

export default NetworkId;
