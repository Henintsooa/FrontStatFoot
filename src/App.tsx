import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonPage,
  setupIonicReact,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonTabBar,
  IonTabButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, menuOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab1Domicile from './pages/Tab1Domicile';
import Tab1Exterieur from './pages/Tab1Exterieur';
import Tab2 from './pages/Tab2';
import Tab2Domicile from './pages/Tab2Domicile';
import Tab2Exterieur from './pages/Tab2Exterieur';
import Tab3 from './pages/Tab3';
import Tab3Domicile from './pages/Tab3Domicile';
import Tab3Exterieur from './pages/Tab3Exterieur';
import { IonRouterLink } from '@ionic/react';

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Foot Statistique</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab1/generale" style={{ color: 'blue' }}>
                <IonLabel>Generale </IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab1/domicile" style={{ color: 'blue' }}>
                <IonLabel>Domicile</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab1/exterieur" style={{ color: 'blue' }}>
                <IonLabel>Exterieur</IonLabel>
              </IonItem>
            </IonMenuToggle>


            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab2/generale" style={{ color: 'green' }}>
                <IonLabel>Defense </IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab2/domicile" style={{ color: 'green' }}>
                <IonLabel>Domicile</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab2/exterieur" style={{ color: 'green' }}>
                <IonLabel>Exterieur</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab3/generale">
                <IonLabel>Attaque </IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab3/domicile">
                <IonLabel>Domicile</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/tab3/exterieur">
                <IonLabel>Exterieur</IonLabel>
              </IonItem>
            </IonMenuToggle>


          
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Statistique foot</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1/generale" component={Tab1} exact />
              <Route path="/tab1/domicile" component={Tab1Domicile} />
              <Route path="/tab1/exterieur" component={Tab1Exterieur} />

              <Route path="/tab2/generale" component={Tab2} exact />
              <Route path="/tab2/domicile" component={Tab2Domicile} />
              <Route path="/tab2/exterieur" component={Tab2Exterieur} />

              <Route path="/tab3/generale" component={Tab3} exact />
              <Route path="/tab3/domicile" component={Tab3Domicile} />
              <Route path="/tab3/exterieur" component={Tab3Exterieur} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonRouterLink routerLink="/tab1/generale" routerDirection="none">
                <IonTabButton tab="tab1">
                  <IonIcon aria-hidden="true" icon={triangle} />
                  <IonLabel>Generale Generale</IonLabel>
                </IonTabButton>
              </IonRouterLink>

              <IonRouterLink routerLink="/tab2/generale" routerDirection="none">
                <IonTabButton tab="tab2">
                  <IonIcon aria-hidden="true" icon={ellipse} />
                  <IonLabel>Defense Generale</IonLabel>
                </IonTabButton>
              </IonRouterLink>

              <IonRouterLink routerLink="/tab3/generale" routerDirection="none">
                <IonTabButton tab="tab3">
                  <IonIcon aria-hidden="true" icon={square} />
                  <IonLabel>Attaque Generale</IonLabel>
                </IonTabButton>
              </IonRouterLink>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
