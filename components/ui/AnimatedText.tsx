"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode, isValidElement, ElementType } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
  as?: ElementType;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  speed = 0.03,
  as: Component = "div",
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check if element is already visible on mount
    const rect = currentRef.getBoundingClientRect();
    const isInViewport = 
      rect.top < window.innerHeight && 
      rect.bottom > 0 && 
      rect.left < window.innerWidth && 
      rect.right > 0;

    if (isInViewport) {
      setIsVisible(true);
      return;
    }

    // Otherwise, observe for when it comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0, rootMargin: '50px' }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  // Extract text from React nodes and create letter array with metadata
  const extractTextAndElements = (node: ReactNode): Array<{ char: string; className?: string; isBreak?: boolean }> => {
    const result: Array<{ char: string; className?: string; isBreak?: boolean }> = [];

    if (typeof node === "string") {
      return node.split("").map((char) => ({ char }));
    }

    if (typeof node === "number") {
      return String(node).split("").map((char) => ({ char }));
    }

    if (isValidElement(node)) {
      if (node.type === "br") {
        return [{ char: "\n", isBreak: true }];
      }

      const className = (node.props as any)?.className;

      if (typeof (node.props as any)?.children === "string") {
        return (node.props as any).children.split("").map((char: string) => ({
          char,
          className,
        }));
      }

      if (Array.isArray((node.props as any)?.children)) {
        return (node.props as any).children.flatMap((child: ReactNode) =>
          extractTextAndElements(child)
        );
      }

      if ((node.props as any)?.children) {
        return extractTextAndElements((node.props as any).children);
      }
    }

    if (Array.isArray(node)) {
      return node.flatMap(extractTextAndElements);
    }

    return [];
  };

  const letters = extractTextAndElements(children);
  let letterIndex = 0;

  // Group letters into words for proper wrapping
  const groupIntoWords = (items: Array<{ char: string; className?: string; isBreak?: boolean }>) => {
    const words: Array<Array<{ char: string; className?: string; isBreak?: boolean }>> = [];
    let currentWord: Array<{ char: string; className?: string; isBreak?: boolean }> = [];

    items.forEach((item) => {
      if (item.isBreak) {
        if (currentWord.length > 0) {
          words.push(currentWord);
          currentWord = [];
        }
        words.push([item]);
      } else if (item.char === " ") {
        if (currentWord.length > 0) {
          words.push(currentWord);
          currentWord = [];
        }
        words.push([item]);
      } else {
        currentWord.push(item);
      }
    });

    if (currentWord.length > 0) {
      words.push(currentWord);
    }

    return words;
  };

  const words = groupIntoWords(letters);
  const ComponentElement = Component as ElementType;

  // If Component is a string (like "h1", "h2", "p"), we can use ref directly
  // Otherwise, wrap in a div for the intersection observer
  if (typeof Component === "string") {
    return (
      <ComponentElement ref={ref as any} className={className} style={{ whiteSpace: "normal" }}>
        {words.map((word, wordIndex) => {
          if (word[0]?.isBreak) {
            return <br key={`br-${wordIndex}`} />;
          }

          const isSpace = word[0]?.char === " ";

          return (
            <span key={`word-${wordIndex}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {word.map((item, charIndex) => {
                const currentIndex = letterIndex++;
                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.01,
                      delay: delay + currentIndex * speed,
                      ease: "easeIn",
                    }}
                    style={{ display: "inline" }}
                    className={item.className}
                  >
                    {isSpace ? "\u00A0" : item.char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </ComponentElement>
    );
  }

  // For custom components, wrap in a div
  return (
    <div ref={ref as any}>
      <ComponentElement className={className} style={{ whiteSpace: "normal" }}>
        {words.map((word, wordIndex) => {
          if (word[0]?.isBreak) {
            return <br key={`br-${wordIndex}`} />;
          }

          const isSpace = word[0]?.char === " ";

          return (
            <span key={`word-${wordIndex}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {word.map((item, charIndex) => {
                const currentIndex = letterIndex++;
                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.01,
                      delay: delay + currentIndex * speed,
                      ease: "easeIn",
                    }}
                    style={{ display: "inline" }}
                    className={item.className}
                  >
                    {isSpace ? "\u00A0" : item.char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </ComponentElement>
    </div>
  );
}

