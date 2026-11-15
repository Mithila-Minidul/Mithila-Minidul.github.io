import { lazy, Suspense, useEffect, useState } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function HeroSceneLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    if (idleWindow.requestIdleCallback) {
      const idleHandle = idleWindow.requestIdleCallback(() => setReady(true), { timeout: 1000 });
      return () => idleWindow.cancelIdleCallback?.(idleHandle);
    }

    const timeoutHandle = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(timeoutHandle);
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  ) : null;
}
