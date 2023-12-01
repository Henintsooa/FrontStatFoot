import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab1Domicile from './pages/Tab1Domicile';
import Tab1Attaque from './pages/Tab1Exterieur';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonRouterLink } from '@ionic/react';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabBar slot="top">
          <IonTabButton tab="tab1Generale" href="/tab1">
              <IonRouterLink routerLink="/tab1">
                Generale
              </IonRouterLink>
          </IonTabButton>
          <IonTabButton tab="tab1Domicile" href="/tab1Domicile">
            <IonRouterLink routerLink="/tab1Domicile">
                Domicile
              </IonRouterLink>
          </IonTabButton>
          <IonTabButton tab="tab1Attaque" href="/tab1Attaque">
            <IonRouterLink routerLink="/tab1Attaque">
                Exterieur
              </IonRouterLink>
          </IonTabButton>
        </IonTabBar>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab1Domicile">
            <Tab1Domicile />
          </Route>
          <Route exact path="/tab1Attaque">
            <Tab1Attaque />
          </Route>

          <Route exact path="/tab2">
            <Tab2 />
          </Route>

          <Route path="/tab3">
            <Tab3 />
          </Route>


        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
              <IonRouterLink routerLink="/tab1">
                Generale
              </IonRouterLink>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonRouterLink routerLink="/tab2">
                Defense
              </IonRouterLink>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonRouterLink routerLink="/tab3">
                Attaque
              </IonRouterLink>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;