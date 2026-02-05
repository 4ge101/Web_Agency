import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./BubbleMenu.css";

const DEFAULT_ITEMS = [
  { label: "home", to: "/", rotation: -8 },
  { label: "about", to: "/about", rotation: 8 },
  { label: "projects", to: "/work", rotation: 8 },
  { label: "blog", to: "/blog", rotation: 8 },
  { label: "contact", to: "/contact", rotation: -8 },
];

export default function BubbleMenu({
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  useFixedPosition = false,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = () => {
    const next = !isMenuOpen;
    if (next) setShowOverlay(true);
    setIsMenuOpen(next);
  };

  const handleNavigate = (to) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  // 🔥 close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0 });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay;
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });

        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`
          );
        }
      });
    } else if (showOverlay) {
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
      });

      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [
    isMenuOpen,
    showOverlay,
    animationEase,
    animationDuration,
    staggerDelay,
  ]);

  return (
    <>
      {/* Toggle Button */}
      <div
        className={containerClassName}
        style={style}
        aria-label="Main navigation"
      >
        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span
            className="menu-line"
            style={{ background: menuContentColor }}
          />
          <span
            className="menu-line short"
            style={{ background: menuContentColor }}
          />
        </button>
      </div>

      {/* Bubble Items */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${
            useFixedPosition ? "fixed" : "absolute"
          }`}
        >
          <ul className="pill-list" role="menu">
            {menuItems.map((item, idx) => (
              <li key={idx} className="pill-col">
                <button
                  role="menuitem"
                  className="pill-link"
                  onClick={() => handleNavigate(item.to)}
                  style={{
                    "--item-rot": `${item.rotation ?? 0}deg`,
                    "--pill-bg": menuBg,
                    "--pill-color": menuContentColor,
                  }}
                  ref={(el) => (bubblesRef.current[idx] = el)}
                >
                  <span
                    className="pill-label"
                    ref={(el) => (labelRefs.current[idx] = el)}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
