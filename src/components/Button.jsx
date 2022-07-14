import React, { useState } from "react";
import Color from "color";

import "./button.scss";

export default function Button({
  button,
  style,
  bgColor,
  className,
  // when cclick on the button
  clickFunc,
  // when key is pressed
  onKeyDown,
  index,
}) {
  const color = Color(bgColor || "#ff914d");
  const [symbolColor, setSymbolColor] = useState(color);

  return (
    <div
      tabIndex={index}
      size="4"
      style={{ ...style, backgroundColor: symbolColor }}
      className={`button ${className} pe-auto`}
      role="button"
      onClick={(e) => clickFunc(button)}
      onKeyDown={onKeyDown}
      onFocus={(e) => setSymbolColor(symbolColor.darken(0.6))}
      onMouseEnter={(e) => setSymbolColor(symbolColor.lighten(0.3))}
      onMouseLeave={(e) => setSymbolColor(color)}
    >
      <span className="user-select-none">{button}</span>
    </div>
  );
}
