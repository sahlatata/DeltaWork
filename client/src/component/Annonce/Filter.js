import { Box, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

const Filter=({setDomaine,niveau,setNiveau,setPays,setPrix})=>{
    
    return(
        <div>
            <Box  width='400px' ml='30px'>
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
            <RadioGroup mt={5} onChange={setNiveau} value={niveau}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Niveau
                </Heading>
                    <Radio value='Débutant'>Débutant</Radio>
                    <Radio value='Intermediaire'>Intermediaire</Radio>
                    <Radio value='Professionel'>Professionel</Radio>
                </Stack>
            </RadioGroup>
            <RadioGroup mt={5} onChange={setPrix}>
                <Stack>
                <Heading fontSize={'xl'} fontFamily={'body'}>
                   Prix
                </Heading>
                    <Radio value='100'>++ 100dt</Radio>
                    <Radio value='500'>++ 500dt </Radio>
                    <Radio value='1000'>++ 1000dt</Radio>
                    <Radio value='3000'>++ 3000dt</Radio>
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
            <FormControl mt={5}>
            <FormLabel htmlFor='country' >Emplacement du client</FormLabel>
                <Select placeholder="Emplacement du client"  onChange={(e)=>setPays(e.target.value)}>
                <option>Tunisie</option>
                <option>France</option>
                <option>Algerie</option>
                <option>Maroc</option>
                <option>Suisse</option>
                <option>Senegal</option>
                </Select>
            </FormControl>
            </Box>
        </div>
    )
}
export default Filter