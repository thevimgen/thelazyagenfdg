/**
 * thelazagen
 */

type ThePrettyagen<T> = { [key in keyof T]: T[key] };

declare interface TheLazyagenProps {
  text: string;
  color: string;
  bg: string;
  size: string;
}
