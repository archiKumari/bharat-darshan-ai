import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import starIcon from "../assets/star.png";

export interface TriviaFact {
  id: string;
  shortLabel: string;
  iconUrl?: string;
  fullFact: string;
}

interface TriviaBubblesProps {
  facts: TriviaFact[];
}

type Bubble = {
  fact: TriviaFact;
  top: string;
  left: string;
  expanded: boolean;
  showText: boolean;
};

const SPAWN_INTERVAL = 5000;     
const MAX_BUBBLES = 1;           
const DETAIL_DISPLAY_TIME = 3000;
const EXPAND_DURATION = 500;     
const EXIT_DURATION = 300;       

const getRandomVh = () => `${Math.random() * 80 + 10}vh`;
const getRandomPercent = () => `${Math.random() * 80 + 10}%`;

const TriviaBubbles: React.FC<TriviaBubblesProps> = ({ facts }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const spawn = () => {
      setBubbles(prev => {
        if (prev.length >= MAX_BUBBLES) return prev;
        const usedIds = prev.map(b => b.fact.id);
        const remaining = facts.filter(f => !usedIds.includes(f.id));
        if (!remaining.length) return prev;

        const fact = remaining[Math.floor(Math.random() * remaining.length)];
        const newBubble: Bubble = {
          fact,
          top: getRandomVh(),
          left: getRandomPercent(),
          expanded: false,
          showText: false,
        };
        return [...prev, newBubble];
      });
    };
    spawn();
    const id = setInterval(spawn, SPAWN_INTERVAL);
    return () => clearInterval(id);
  }, [facts]);

  const handleClick = (id: string) => {
    setBubbles(prev =>
      prev.map(b => (b.fact.id === id ? { ...b, expanded: true } : b))
    );
    setTimeout(() => {
      setBubbles(prev =>
        prev.map(b => (b.fact.id === id ? { ...b, showText: true } : b))
      );
      // Remove bubble after showing text + exit animation
      setTimeout(() => {
        setBubbles(current => current.filter(b => b.fact.id !== id));
      }, DETAIL_DISPLAY_TIME);
    }, EXPAND_DURATION + EXIT_DURATION);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {bubbles.map(({ fact, top, left, expanded, showText }) => (
          <motion.div
            key={fact.id}
            className="absolute cursor-pointer pointer-events-auto overflow-hidden"
            style={{ top, left }}
            initial={{
              opacity: 0,
              scale: 0.6,
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: 'rgba(255,255,255,0)'
            }}
            animate={{
              opacity: 1,
              scale: 1,
              width: expanded ? 150 : 48,
              height: expanded ? 80 : 48,
              borderRadius: expanded ? 12 : 24,
              x: expanded ? 0 : [0, 10, -10, 0],
              y: expanded ? 0 : [0, -10, 10, 0],
              backgroundColor: expanded ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)'
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: EXIT_DURATION / 1000 },
              scale: { duration: 0.3 },
              width: { duration: EXPAND_DURATION / 1000, ease: 'easeInOut' },
              height: { duration: EXPAND_DURATION / 1000, ease: 'easeInOut' },
              borderRadius: { duration: EXPAND_DURATION / 1000, ease: 'easeInOut' },
              backgroundColor: { duration: EXPAND_DURATION / 1000, ease: 'easeInOut' },
              x: { repeat: expanded ? 0 : Infinity, duration: 2, ease: 'easeInOut' },
              y: { repeat: expanded ? 0 : Infinity, duration: 2, ease: 'easeInOut' }
            }}
            onClick={() => !expanded && handleClick(fact.id)}
          >
            {showText ? (
              <div className="p-2 text-gray-800 text-sm">
                {fact.fullFact}
              </div>
            ) : (
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  boxShadow: 'inset 0 0 8px rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.4)'
                }}
              >
                <img
                  src={fact.iconUrl || starIcon}
                  alt={fact.shortLabel}
                  className="w-6 h-6"
                />
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TriviaBubbles;
