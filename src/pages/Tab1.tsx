import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from '@ionic/react';
import './Tab1.css';


const MaTable: React.FC = () => {
  const donnees = [
    { id: 1, col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1', col6: 'F1', col7: 'G1', col8: 'H1', col9: 'I1', col10: 'J1' },
    { id: 2, col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2', col6: 'F2', col7: 'G2', col8: 'H2', col9: 'I2', col10: 'J2' },
    { id: 3, col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3', col6: 'F3', col7: 'G3', col8: 'H3', col9: 'I3', col10: 'J3' },
    { id: 4, col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4', col6: 'F4', col7: 'G4', col8: 'H4', col9: 'I4', col10: 'J4' },
    { id: 5, col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5', col6: 'F5', col7: 'G5', col8: 'H5', col9: 'I5', col10: 'J5' },
  ];

  return (
    <table className="table">
      <IonRow>
        <IonCol>ID</IonCol>
        <IonCol>Colonne 1</IonCol>
        <IonCol>Colonne 2</IonCol>
        <IonCol>Colonne 3</IonCol>
        <IonCol>Colonne 4</IonCol>
        <IonCol>Colonne 5</IonCol>
        <IonCol>Colonne 6</IonCol>
        <IonCol>Colonne 7</IonCol>
        <IonCol>Colonne 8</IonCol>
        <IonCol>Colonne 9</IonCol>
        <IonCol>Colonne 10</IonCol>
      </IonRow>

      {donnees.map((ligne) => (
        <IonRow key={ligne.id}>
          <IonCol>{ligne.id}</IonCol>
          <IonCol>{ligne.col1}</IonCol>
          <IonCol>{ligne.col2}</IonCol>
          <IonCol>{ligne.col3}</IonCol>
          <IonCol>{ligne.col4}</IonCol>
          <IonCol>{ligne.col5}</IonCol>
          <IonCol>{ligne.col6}</IonCol>
          <IonCol>{ligne.col7}</IonCol>
          <IonCol>{ligne.col8}</IonCol>
          <IonCol>{ligne.col9}</IonCol>
          <IonCol>{ligne.col10}</IonCol>
        </IonRow>
      ))}
    </table>
  );
};

const Tab1: React.FC = () => {
  return (
    <div>
      {/* Incorporation du composant MaTable */}
      <MaTable />

      {/* Votre autre code ici */}
    </div>
  );
};

export default Tab1;
