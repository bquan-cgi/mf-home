import { lazy, Suspense } from "react";

const MicroFrontendTwoLazy = lazy(() => import("app2/App2Home"));

export default function MicroFrontendTwoPage() {
  return (
    <div className="App">
      <Suspense fallback="Loading app 2...">
        <MicroFrontendTwoLazy /> 
      </Suspense>
    </div>
  );
} 
