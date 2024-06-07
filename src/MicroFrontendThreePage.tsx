import { lazy, Suspense } from "react";

const MicroFrontendThreeLazy = lazy(() => import("app3/App3Home"));

export default function MicroFrontendThreePage() {
  return (
    <div className="App">
      <p>app 3 loading</p>
      <Suspense fallback="Loading app 3...">
        <MicroFrontendThreeLazy /> 
      </Suspense>
    </div>
  );
} 
