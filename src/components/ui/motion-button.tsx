"use client";

import React, {
  forwardRef,
  useRef,
  type ButtonHTMLAttributes,
  type Ref,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* -----------------------  moving halo / border  ----------------------- */

const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      progress.set(((time % duration) * length) / duration);
    }
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...props}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div style={{ position: "absolute", top: 0, left: 0, transform }}>
        {children}
      </motion.div>
    </>
  );
};

/* ---------------------------  main button  --------------------------- */

export interface MotionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
}

export const MotionButton = forwardRef(
  (
    {
      borderRadius = "1.75rem",
      children,
      containerClassName,
      borderClassName,
      duration,
      className,
      ...rest
    }: MotionButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      {...rest}
      ref={ref}
      className={cn(
        "relative h-12 w-32 overflow-hidden bg-transparent p-[1px] text-base",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* moving glow */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-80 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* solid face */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  )
);

MotionButton.displayName = "MotionButton";
