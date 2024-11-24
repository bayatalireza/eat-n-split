import React from "react";

export default function Button({children, onHandleSetShowForm}) {
  return <button className="button" onClick={onHandleSetShowForm}>{children}</button>;
}
