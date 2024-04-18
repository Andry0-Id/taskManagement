import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

// Fonction pour générer un élément Card.Title
const renderCardTitle = (title, subtitle = "Card Subtitle") => (
 <Card.Title
    title={title}
    subtitle={subtitle}
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
 />
);

// Données des tâches
const tasks = [
 { title: "Révision", subtitle: "Card Subtitle" },
 { title: "Travail de laboratoire", subtitle: "Card Subtitle" },
 { title: "Étude de cas", subtitle: "1 heure" },
 // Ajoutez d'autres tâches ici
];

const MyComponent = () => (
 <>
    {tasks.map((task, index) => (
      <React.Fragment key={index}>
        {renderCardTitle(task.title, task.subtitle)}
      </React.Fragment>
    ))}
 </>
);

export default MyComponent;
