import React, { useRef, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [pos, setPos] = useState({ x: 0, y: window.innerHeight - 100 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (dragging.current) {
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <footer
      className="footer"
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        cursor: "move",
        zIndex: 9999,
      }}
     
    >
      <p>© {new Date().getFullYear()} Developed By Aynal Haque</p>
      <address>Rajshahi-Bangladesh</address>
    </footer>
  );
}