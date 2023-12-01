import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import './Tab1.css';

const MaTable: React.FC<{ data: any[] }> = ({ data }) => {
  console.log('Données reçues dans MaTable :', data);
    return (
      <IonGrid className="table-container">
        <IonRow className="table-header">
          <IonCol className="ion-text-center">Nom d'Équipe</IonCol>
          <IonCol className="ion-text-center">Nom de Compétition</IonCol>
          <IonCol className="ion-text-center">Tirs par minute</IonCol>
          <IonCol className="ion-text-center">Tirs CA par minute</IonCol>
          <IonCol className="ion-text-center">Dribbles par minute</IonCol>
          <IonCol className="ion-text-center">Fautes subies par minute</IonCol>
          <IonCol className="ion-text-center">Note</IonCol>
          <IonCol className="ion-text-center">ID de Type</IonCol>
        </IonRow>
  
        {data.map((ligne, index) => (
          <IonRow key={index} className="table-row">
            <IonCol className="ion-text-center">{ligne.nomEquipe}</IonCol>
            <IonCol className="ion-text-center">{ligne.nomCompetition}</IonCol>
            <IonCol className="ion-text-center">{ligne.tirs_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.tirs_CA_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.dribbles_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.faute_subies_pm}</IonCol>
            <IonCol className="ion-text-center">{ligne.note}</IonCol>
            <IonCol className="ion-text-center">{ligne.idType}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
};

const Tab1: React.FC = () => {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5105/ViewAttaqueController/ViewAttaque')
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


export default Tab1;
