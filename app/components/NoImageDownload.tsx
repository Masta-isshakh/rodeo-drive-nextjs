"use client";

import { useEffect } from "react";

export default function NoImageDownload() {
  useEffect(() => {
    // Block context menu on images
    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If user right-clicks an image or inside a picture element
      if (target.closest("img, picture, [data-protect-image]")) {
        e.preventDefault();
      }
    };

    // Block dragging images to desktop
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("img, picture, [data-protect-image]")) {
        e.preventDefault();
      }
    };

    // iOS long-press save is harder; we can reduce it by blocking touch callout via CSS (next section)
    document.addEventListener("contextmenu", onContextMenu, { capture: true });
    document.addEventListener("dragstart", onDragStart, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", onContextMenu, { capture: true } as any);
      document.removeEventListener("dragstart", onDragStart, { capture: true } as any);
    };
  }, []);

  return null;
}
