import { type VariantProps, cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background-900 dark:focus-visible:ring-primary-400',
  {
    variants: {
      variant: {
        default:
          'bg-primary-500 text-white hover:bg-primary-600 transition duration-300 hover:scale-105 focus-visible:ring-primary-500',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-lg transition duration-300 hover:scale-105 focus-visible:ring-ring',
        outline: 'bg-white ',
        secondary:
          'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg transition duration-300 hover:scale-105',
        ghost:
          'bg-transparent text-white hover:bg-background-800 hover:text-white dark:hover:bg-background-900',
        link: 'inline-block rounded-full bg-accent-500 text-sm font-semibold text-white hover:bg-accent-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
