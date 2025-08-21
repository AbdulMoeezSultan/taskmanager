import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#f97316] focus-visible:ring-[#f97316]/50 focus-visible:ring-[3px] aria-invalid:ring-[#ea580c]/20 dark:aria-invalid:ring-[#ea580c]/40 aria-invalid:border-[#ea580c]",
  {
    variants: {
      variant: {
        default:
          "bg-[#f97316] text-white shadow-xs hover:bg-[#ea580c]",
        destructive:
          "bg-[#ea580c] text-white shadow-xs hover:bg-[#ea580c]/90 focus-visible:ring-[#ea580c]/20 dark:focus-visible:ring-[#ea580c]/40 dark:bg-[#ea580c]/60",
        outline:
          "border border-[#e5e7eb] bg-[#fff7ed] text-[#f97316] shadow-xs hover:bg-[#f97316] hover:text-white",
        secondary:
          "bg-[#fff7ed] text-[#f97316] shadow-xs hover:bg-[#fafafa]",
        ghost:
          "hover:bg-[#fff7ed] hover:text-[#f97316] dark:hover:bg-[#fff7ed]/50",
        link: "text-[#f97316] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
