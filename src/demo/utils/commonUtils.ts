// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(fn: Function, delay: number): Function {
  let timer: ReturnType<typeof setTimeout>;

  return function debouncedFn(...args: never[]) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
