import { Component, Suspense, lazy, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { MegaphoneVideo } from './MegaphoneVideo';

// three.js solo se descarga en escritorio con mouse; en celular queda el video
const MegaphoneScene = lazy(() => import('./MegaphoneScene'));

type BoundaryProps = { children: ReactNode; onError: () => void };

class SceneErrorBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    console.warn('Megáfono 3D no disponible, se usa el video:', error);
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function supportsInteractive3D() {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || reducedMotion) return false;
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch {
    return false;
  }
}

const VIDEO_MASK =
  '[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_78%,transparent_100%)]';

export function MegaphoneHero() {
  const [use3D, setUse3D] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUse3D(supportsInteractive3D());
  }, []);

  return (
    <>
      <MegaphoneVideo
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${VIDEO_MASK} ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {use3D && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <SceneErrorBoundary onError={() => setUse3D(false)}>
            <Suspense fallback={null}>
              <MegaphoneScene onReady={() => setReady(true)} />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
    </>
  );
}
