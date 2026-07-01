 "use client";

import {Button, Spinner} from "@heroui/react";
import { div } from "framer-motion/client";
import React from "react";

export default function Loading() {
  return (
  <div className="flex justify-center items-center h[200px]">
     <Button isPending>
      {({isPending}) => (
        <>
          {isPending ? <Spinner color="current" size="sm" /> : null}
          Uploading...
        </>
      )}
    </Button>
  </div>
  );
}

