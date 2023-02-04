import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge classes with tailwind-merge with clsx full feature
 * @param classes - of class value
 * @return merged classname
 */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}