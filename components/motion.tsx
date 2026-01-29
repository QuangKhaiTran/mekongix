"use client"

import { motion, type Variants, type HTMLMotionProps } from "framer-motion"
import { type ReactNode } from "react"

// Animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Default transition
export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
}

// Motion wrapper components
interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInUp({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInDown({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInDown}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInLeft}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInRight}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={scaleIn}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  staggerDelay?: number
}

export function StaggerContainer({ children, staggerDelay = 0.1, ...props }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={staggerItem}
      transition={defaultTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Number counter animation
interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ end, suffix = "", duration = 2, className }: CountUpProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {end}{suffix}
      </motion.span>
    </motion.span>
  )
}

// Export motion for direct use
export { motion }
