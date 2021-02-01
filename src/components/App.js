import Loading from '../reusables/Loading';

import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';
import {
  ExitFeature,
  MotionConfig,
  GesturesFeature,
  AnimationFeature,
  AnimateSharedLayout,
  AnimateLayoutFeature,
} from 'framer-motion';

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={themeObj}>
      <MotionConfig
        features={[AnimateLayoutFeature, AnimationFeature, ExitFeature, GesturesFeature]}>
        <>
          <Suspense fallback={<Loading fullscreen={true} />}>
            <AnimateSharedLayout>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <div>Hello World 👋</div>
                </Route>
              </Switch>
            </AnimateSharedLayout>
          </Suspense>
        </>
      </MotionConfig>
    </ThemeProvider>
  );
}
