import React, { useRef, useEffect } from "react";
import marked from "marked";

function Page() {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      contentRef.current.innerHTML = marked("# Mobilité longue distance");
    }
  }, [contentRef]);

  return <div ref={contentRef} />;
}

export default Page;
