import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Hello.css';

const Hello: React.FC = () => {
  let history = useHistory<{ name: string }>();

  let name = history.location.state.name;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow className="fullheight ion-justify-content-center ion-align-items-center">
          <div className="ion-align-self-center">
            <h1 className="ion-margin-top ion-text-center">Hello, {name}</h1>
          </div>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Hello;