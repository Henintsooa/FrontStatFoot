import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import './Tab1.css';

const MaTableAttaque: React.FC<{ data: any[] }> = ({ data }) => {
  console.log('Données reçues dans MaTableAttaque :', data);
    return (
      <IonGrid className="table-container">
        <IonRow className="table-header">
          <IonCol className="ion-text-center">Équipe</IonCol>
          <IonCol className="ion-text-center">Compétition</IonCol>
          <IonCol className="ion-text-center">Buts</IonCol>
          <IonCol className="ion-text-center">Tirs pm</IonCol>
          <IonCol className="ion-text-center">Discipline Jaune</IonCol>
          <IonCol className="ion-text-center">Discipline Rouge</IonCol>
          <IonCol className="ion-text-center">Possession</IonCol>
          <IonCol className="ion-text-center">Passes Reussies</IonCol>
          <IonCol className="ion-text-center">Aeriens Gagnes</IonCol>
          <IonCol className="ion-text-center">Note</IonCol>
        </IonRow>
  
        {data.map((ligne, index) => (
          <IonRow key={index} className="table-row">
            <IonCol className="ion-text-center">{ligne.nomEquipe}</IonCol>
            <IonCol className="ion-text-center">{ligne.nomCompetition}</IonCol>
            <IonCol className="ion-text-center">{ligne.buts}</IonCol>
            <IonCol className="ion-text-center">{ligne.tirs_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.disciplineJaune}</IonCol>
            <IonCol className="ion-text-center">{ligne.disciplineRouge}</IonCol>
            <IonCol className="ion-text-center">{ligne.possession}</IonCol>
            <IonCol className="ion-text-center">{ligne.passesReussies}</IonCol>
            <IonCol className="ion-text-center">{ligne.aeriensGagnes}</IonCol>
            <IonCol className="ion-text-center">{ligne.note}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
};

const Tab1Exterieur: React.FC = () => {
  const [apiDataDomicile, setApiDataDomicile] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://codewitharo.me/Generales/exterieur')
      .then((response) => {
        console.log('Données récupérées avec succès :', response.data);
        setApiDataDomicile(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);
  
  return (
    <div>
      <MaTableAttaque data={apiDataDomicile} />
    </div>
  );
};


export default Tab1Exterieur;
