import { FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

const Filter=({setDomaine})=>{
    
    return(
        <div>
            <Text fontSize={'2xl'} fontFamily={'body'}>Filter par</Text>
            <FormControl mt={5}>
            <FormLabel htmlFor='country' >Domaine d'activité</FormLabel>
                <Select placeholder="Selectionner votre domaine d'activité"  onChange={(e)=>setDomaine(e.target.value)}>
                    <option>Developpement mobile </option>
                    <option>Developpement web  </option>
                    <option>DevOps </option>
                    <option>Data Science </option>
                    <option>Developpement jeux video </option> 
                </Select>
            </FormControl>
            <RadioGroup mt={5} >
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Niveau
                </Heading>
                    <Radio value='Débutant'>
                    Débutant
                    </Radio>
                    <Radio value='Intermediaire'>Intermediaire</Radio>
                    <Radio value='Professionel'>Professionel</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Prix
                </Heading>
                    <Radio value='1'> Moins de 100dt</Radio>
                    <Radio value='2'>100dt-500dt </Radio>
                    <Radio value='3'>500dt-1000dt</Radio>
                    <Radio value='4'>1000dt-5000dt</Radio>
                    <Radio value='5'>Plus de 5000dt</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Durée du project
                </Heading>
                    <Radio value='1'> Moins de 1 mois</Radio>
                    <Radio value='2'>De 1 à 3 mois </Radio>
                    <Radio value='3'>De 3 à 6 mois</Radio>
                    <Radio value='4'>Plus de 6 mois</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5}>
            <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Nombre d'heure par semaine
                </Heading>
                    <Radio value='1'> Moins de 30h/semaine</Radio>
                    <Radio value='2'> Plus de 30h/semaine</Radio>
                </Stack>
            </RadioGroup>
            <FormControl mt={5}>
                <FormLabel fontSize={'xl'} fontFamily={'body'}>Emplacement du Client</FormLabel>
                <Input width={200}/>
            </FormControl>
        </div>
    )
}
export default Filter