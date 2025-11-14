import * as React from "react";
import { cn } from "@/lib/utils"; // use your existing cn() helper

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, bordered = false, loading = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white p-4 shadow-sm transition-all duration-200",
          bordered && "border border-gray-200",
          hoverable && "hover:shadow-md hover:scale-[1.01]",
          loading && "pointer-events-none opacity-70",
          className
        )}
        {...props}
      >
        {loading ? <CardSkeleton /> : children}
      </div>
    );
  }
);
Card.displayName = "Card";

/* ---------- Subcomponents ---------- */

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-2", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-2", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 flex items-center justify-end gap-2", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/* ---------- Skeleton Loader ---------- */

export function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-5 w-2/3 rounded-md bg-gray-200" />
      <div className="h-4 w-full rounded-md bg-gray-100" />
      <div className="h-4 w-5/6 rounded-md bg-gray-100" />
      <div className="mt-3 h-9 w-24 rounded-md bg-gray-200" />
    </div>
  );
}
