"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export function LoadingSpinner({ size = "md", color = "text-amber-600" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${color}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <title>Carregando</title>
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );
}

export function PulsingDot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="w-2 h-2 bg-amber-600 rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function FloatingCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const letters = text.split("");

  return (
    <span>
      {letters.map((letter, index) => (
        <motion.span
          key={`${text}-${index}-${letter}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
