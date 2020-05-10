import React, { useRef, useEffect, useState } from "react";
import marked from "marked";

import rawMd from "!raw-loader!./mobilite-du-quotidien.md";

function Page() {
  const contentRef = useRef(null);
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    if (contentRef) {
      setMdContent(rawMd);
    }
  }, [contentRef]);

  useEffect(() => {
    if (contentRef && mdContent) {
      contentRef.current.innerHTML = marked(mdContent);
    }
  }, [mdContent]);

  return <div ref={contentRef} />;
}

export default Page;
