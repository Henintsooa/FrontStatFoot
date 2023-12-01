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
import Tab1Exterieur from './pages/Tab1Exterieur';
import Tab2 from './pages/Tab2';
import Tab2Domicile from './pages/Tab2Domicile';
import Tab2Exterieur from './pages/Tab2Exterieur';

import Tab3 from './pages/Tab3';
import Tab3Domicile from './pages/Tab3Domicile';
import Tab3Exterieur from './pages/Tab3Exterieur';

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
      <IonTabButton tab="tab1" href="/tab1">
        <IonRouterLink routerLink="/tab1/generale">
          Generale Generale
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab1" href="/tab1">
        <IonRouterLink routerLink="/tab1/domicile">
          Generale Domicile
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab1" href="/tab1">
        <IonRouterLink routerLink="/tab1/exterieur">
          Generale Exterieur
        </IonRouterLink>
      </IonTabButton>

      
      <IonTabButton tab="tab2" href="/tab2">
        <IonRouterLink routerLink="/tab2/generale">
          Defense Generale
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonRouterLink routerLink="/tab2/domicile">
          Defense Domicile
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonRouterLink routerLink="/tab2/exterieur">
          Defense Exterieur
        </IonRouterLink>
      </IonTabButton>

      <IonTabButton tab="tab3" href="/tab3">
        <IonRouterLink routerLink="/tab3/generale">
          Attaque Generale
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab3">
        <IonRouterLink routerLink="/tab3/domicile">
          Attaque Domicile
        </IonRouterLink>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab3">
        <IonRouterLink routerLink="/tab3/exterieur">
          Attaque Exterieur
        </IonRouterLink>
      </IonTabButton>
    </IonTabBar>
    
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1/generale" component={Tab1} />
        <Route path="/tab1/domicile" component={Tab1Domicile} />
        <Route path="/tab1/exterieur" component={Tab1Exterieur} />

        <Route path="/tab2/generale" component={Tab2} />
        <Route path="/tab2/domicile" component={Tab2Domicile} />
        <Route path="/tab2/exterieur" component={Tab2Exterieur} />

        <Route path="/tab3/generale" component={Tab3} />
        <Route path="/tab3/domicile" component={Tab3Domicile} />
        <Route path="/tab3/exterieur" component={Tab3Exterieur} />
      </IonRouterOutlet>


      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1/generale">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonRouterLink routerLink="/tab1/generale">
            Generale
          </IonRouterLink>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2/generale">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonRouterLink routerLink="/tab2/generale">
            Defense
          </IonRouterLink>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3/generale">
          <IonIcon aria-hidden="true" icon={square} />
          <IonRouterLink routerLink="/tab3/generale">
            Attaque
          </IonRouterLink>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;