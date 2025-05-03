
import React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

// Тип для свойств компонента
export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof LucideIcons | string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

// Компонент для иконок
const Icon = ({
  name,
  color,
  size = 20,
  strokeWidth = 2,
  className,
  fallback = "CircleAlert",
  ...props
}: IconProps) => {
  // Выбор иконки или запасной вариант
  const LucideIcon = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found.`);
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <LucideIcon
        color={color}
        size={size}
        strokeWidth={strokeWidth}
      />
    </div>
  );
};

export default Icon;
