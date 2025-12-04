import React, { useEffect, useRef, useState } from "react";

export default function CursorTrail({
  count = 6,
  size = 8,
  gap = 10,
  trailEase = 0.18,
}) {
  const containerRef = useRef(null);
  const positionsRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const [dotColor, setDotColor] = useState("white");

  const supportsTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // === DETECT BACKGROUND COLOR ===
  const detectBgColor = (x, y) => {
    const el = document.elementFromPoint(x, y);
    if (!el) return;

    const style = window.getComputedStyle(el);
    const bg = style.backgroundColor;

    if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
      return;
    }

    // Parse RGB
    const match = bg.match(/\d+/g);
    if (!match) return;
    const [r, g, b] = match.map(Number);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness < 130) {
      setDotColor("rgba(255,255,255,0.9)"); // background gelap → dot putih
    } else {
      setDotColor("rgba(0,0,0,0.85)"); // background terang → dot hitam
    }
  };

  useEffect(() => {
    if (supportsTouch) return;

    positionsRef.current = new Array(count).fill(0).map(() => ({
      x: -9999,
      y: -9999,
    }));

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mouseRef.current.x = x;
      mouseRef.current.y = y;

      detectBgColor(x, y);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });

    const step = () => {
      const pos = positionsRef.current;
      const m = mouseRef.current;

      pos[0].x += (m.x - pos[0].x) * trailEase;
      pos[0].y += (m.y - pos[0].y) * trailEase;

      for (let i = 1; i < pos.length; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * trailEase;
        pos[i].y += (pos[i - 1].y - pos[i].y) * trailEase;
      }

      const children = containerRef.current?.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const el = children[i];
          const p = pos[i];
          const s = 1 - i / (pos.length * 1.6);

          el.style.transform = `translate3d(${p.x - size / 2}px, ${
            p.y - size / 2
          }px, 0) scale(${s})`;
          el.style.opacity = `${0.95 - i * (0.9 / pos.length)}`;
          el.style.background = dotColor;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [count, size, trailEase, dotColor, supportsTouch]);

  const dotStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "999px",
    transform: `translate3d(-9999px, -9999px, 0)`,
    transition: "background 160ms linear",
    zIndex: 9999,
    mixBlendMode: "normal",
    willChange: "transform, opacity, background",
  };

  if (supportsTouch) return null;

  return (
    <div aria-hidden="true" ref={containerRef}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`cursor-dot cursor-dot-${i}`}
          style={{
            ...dotStyle,
            filter: i === 0 ? "blur(0px)" : "blur(0.6px)",
          }}
        />
      ))}
    </div>
  );
}
