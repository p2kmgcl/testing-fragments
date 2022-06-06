import React from "react";

export default function ({ configuration }) {
  return (
    <pre className="configuration-logger">
      <code>{JSON.stringify(configuration, null, 2)}</code>
    </pre>
  );
}
