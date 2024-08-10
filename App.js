import React from "react";
import Navigation from "./app/navigation";
import { AutoProvider } from "./app/contexts/ctx-vehicules";
import { GlbProvider, useGlb } from "./app/contexts/ctx-globals";
import NavMenu from "./app/nav-menu";
import { View } from "react-native";
import MyOption from "./app/comps/autres/my-option";
import { PrevProvider } from "./app/contexts/ctx-preventifs";
import { SuiProvider } from "./app/contexts/ctx-suivi";
import { RepProvider } from "./app/contexts/ctx-reparations";

const App = () => {
  return (
      <GlbProvider>
        <AutoProvider>
          <PrevProvider>
            <SuiProvider>
              <RepProvider>
                <Navigation />
              </RepProvider>
            </SuiProvider>
            <NavMenu />
          </PrevProvider>
        </AutoProvider>
      </GlbProvider>
  )
}

export default App;