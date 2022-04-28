import { Text } from '@chakra-ui/react';
import React from 'react';



function DemandeCard ({el}) {
    
    return (
        <div>
           <Text>{el.FreelancerId}</Text> 
        </div>
    );
}

export default DemandeCard;