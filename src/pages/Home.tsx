import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  let history = useHistory();

  let [name, setName] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding-horizontal container">
          <IonItem fill="outline">
            <IonLabel position="floating">Digite algo:</IonLabel>
            <IonInput placeholder="Name" onIonChange={(e) => {
              setName(e.detail.value!);
            }}></IonInput>
          </IonItem>
          <IonButton
            onClick={(e) => {
              e.preventDefault();
              history.push('/hello', { name });
            }}
            shape="round" className="ion-margin-top"
          >
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
