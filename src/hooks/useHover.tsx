import { RefObject, useEffect, useState } from 'react';

function useHover<T extends HTMLElement>(ref: RefObject<T>) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    node.addEventListener('mouseenter', handleMouseOver);
    node.addEventListener('mouseleave', handleMouseOut);
    return () => {
      node.removeEventListener('mouseenter', handleMouseOver);
      node.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [ref]);

  return isHovering;
}

export default useHover;
