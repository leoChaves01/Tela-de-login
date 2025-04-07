'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className = '', htmlFor, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    htmlFor={htmlFor} // Garante que o Label está vinculado ao input correspondente
    className={cn(labelVariants({}), className)}
    {...props}
  />
));

Label.displayName = 'Label'; // Define um nome claro para depuração

export { Label };
