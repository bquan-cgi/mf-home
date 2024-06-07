import { lazy, Suspense } from "react";

const MicroFrontendTwoLazy = lazy(() => import("app2/App2Home"));

export default function MicroFrontendTwoPage() {
  return (
    <div className="App">
      <p>app 2 loading</p>
      <Suspense fallback="Loading app 2...">
        <MicroFrontendTwoLazy /> 
      </Suspense>
    </div>
  );
} 
