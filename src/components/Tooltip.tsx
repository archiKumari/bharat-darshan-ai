// Tooltip.tsx
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import type { ReactNode } from 'react';

interface TooltipProps {
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Callback to calculate & assign tooltip position
  const updatePosition = useCallback(() => {
    const triggerEl = triggerRef.current;
    const tipEl = tooltipRef.current;
    if (!triggerEl || !tipEl) return;

    // Measure the trigger’s bounding box
    const rect = triggerEl.getBoundingClientRect();
    const tipW = tipEl.offsetWidth;
    const tipH = tipEl.offsetHeight;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = rect.top - tipH - 6;
        left = rect.left + rect.width / 2 - tipW / 2;
        break;
      case 'bottom':
        top = rect.bottom + 6;
        left = rect.left + rect.width / 2 - tipW / 2;
        break;
      case 'left':
        top = rect.top + rect.height / 2 - tipH / 2;
        left = rect.left - tipW - 6;
        break;
      case 'right':
      default:
        top = rect.top + rect.height / 2 - tipH / 2;
        left = rect.right + 6;
        break;
    }

    // Assign styles
    tipEl.style.top = `${top}px`;
    tipEl.style.left = `${left}px`;
  }, [position]);

  // Run before paint whenever hover state changes
  useLayoutEffect(() => {
    if (isHovered) {
      updatePosition();
      // Also listen for window resize / scroll while hovered
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isHovered, updatePosition]);

  // Render the trigger normally; on hover, portal the tooltip into document.body
  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>

      {isHovered &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={{
              position: 'fixed',
              zIndex: 9999,
              pointerEvents: 'none', // so it never blocks hover events on other elements
            }}
            className="bg-white text-gray-800 p-2 rounded shadow-lg max-w-xs text-sm leading-snug"
          >
            {content}
            {/* Arrow/triangle element */}
            <div
              className={`absolute w-3 h-3 bg-white rotate-45 shadow-md ${
                position === 'top'
                  ? 'bottom-[-6px] left-1/2 -translate-x-1/2'
                  : position === 'bottom'
                  ? 'top-[-6px] left-1/2 -translate-x-1/2'
                  : position === 'left'
                  ? 'right-[-6px] top-1/2 -translate-y-1/2'
                  : 'left-[-6px] top-1/2 -translate-y-1/2'
              }`}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;