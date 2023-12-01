import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import './Tab1.css';

const MaTableDomicile: React.FC<{ data: any[] }> = ({ data }) => {
  console.log('Données reçues dans MaTableDomicile :', data);
    return (
      <IonGrid className="table-container">
        <IonRow className="table-header">
          <IonCol className="ion-text-center">Nom d'Équipe</IonCol>
          <IonCol className="ion-text-center">Nom de Compétition</IonCol>
          <IonCol className="ion-text-center">Buts</IonCol>
          <IonCol className="ion-text-center">Tirs par minute</IonCol>
          <IonCol className="ion-text-center">Discipline Jaune</IonCol>
          <IonCol className="ion-text-center">Discipline Rouge</IonCol>
          <IonCol className="ion-text-center">Possession</IonCol>
          <IonCol className="ion-text-center">Passes Reussies</IonCol>
          <IonCol className="ion-text-center">Aeriens Gagnes</IonCol>
          <IonCol className="ion-text-center">Note</IonCol>
          <IonCol className="ion-text-center">Type</IonCol>
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
            <IonCol className="ion-text-center">{ligne.idType}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
};

const Tab1Domicile: React.FC = () => {
  const [apiDataDomicile, setApiDataDomicile] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5105/ViewGeneraleController/ViewGenerale/type2')
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
      <MaTableDomicile data={apiDataDomicile} />
    </div>
  );
};


export default Tab1Domicile;
