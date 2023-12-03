import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import './Tab2.css';

const MaTable: React.FC<{ data: any[] }> = ({ data }) => {
  console.log('Données reçues dans MaTable :', data);
    return (
      <IonGrid className="table-container">
        <IonRow className="table-header">
          <IonCol className="ion-text-center">Équipe</IonCol>
          <IonCol className="ion-text-center">Compétition</IonCol>
          <IonCol className="ion-text-center">Tirs pm</IonCol>
          <IonCol className="ion-text-center">Tacles pm</IonCol>
          <IonCol className="ion-text-center">Interception pm</IonCol>
          <IonCol className="ion-text-center">Faute pm</IonCol>
          <IonCol className="ion-text-center">Hors Jeu pm</IonCol>
          <IonCol className="ion-text-center">Note</IonCol>
        </IonRow>
  
        {data.map((ligne, index) => (
          <IonRow key={index} className="table-row">
            <IonCol className="ion-text-center">{ligne.nomEquipe}</IonCol>
            <IonCol className="ion-text-center">{ligne.nomConception}</IonCol>
            <IonCol className="ion-text-center">{ligne.tirs_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.tacles_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.interceptions_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.faute_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.hors_jeu_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.note}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
};

const Tab2: React.FC = () => {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://13.245.158.233:5003/ViewDefenseController/ViewDefense/type1')
      .then((response) => {
        console.log('Données récupérées avec succès :', response.data);
        setApiData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);
  
  return (
    <div>
      <MaTable data={apiData} />
    </div>
  );
};


export default Tab2;
