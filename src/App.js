
import './App.css';
import {   Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Select,
  Link,
Image, 
Button} from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";

function App() {
  const [selectedBar, setSelectedBar] = useState(null);

  const [bars, setBars] = useState([]);
  useEffect(() => {
      // fetch('./src/assets/json/BarResponse.json')
      fetch('data/BarResponse.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setBars(data);
        })
        .catch((err) => {
          console.log('in this error?')
            console.log(err.message);
        });
  }, []);

  if(selectedBar) {
    return (
      <ChakraProvider>
          <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}>
              <Image
                src={selectedBar.image} layout={'fill'}
              />
            </Box>
          <Stack>
            <Box w="100px">
              <Button onClick={() => setSelectedBar(null)}>Back</Button>
            </Box>
          </Stack>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
            Quizzo Bar
            </Text>
            <Heading
              
              fontSize={'2xl'}
              fontFamily={'body'}>
                  {selectedBar.name}
            </Heading>
            <Text color={'gray.500'}>
            {selectedBar.dayOfWeek} at {selectedBar.time}
            </Text>
          </Stack>
        </Box>
        </Center>
      </ChakraProvider>
    )
  } else {
  return (
    <ChakraProvider>
      <div className="App">

      <Center py={6}>
        <Box w="250px">
          <Select size='lg' placeholder='Select day'>
            <option value='monday'>Monday</option>
            <option value='tuesday'>Tuesday</option>
            <option value='wednesday'>Wednesday</option>
            <option value='thursday'>Thursday</option>
            <option value='friday'>Friday</option>
          </Select>
        </Box>
      </Center>
        {bars.map((bar) => (
         <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}>
              <Image
                src={bar.image} layout={'fill'}
              />
            </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
             Quizzo Bar
            </Text>
            <Heading
              
              fontSize={'2xl'}
              fontFamily={'body'}>
                <Link onClick={() => setSelectedBar(bar)}>
                  {bar.name}
                </Link>
            </Heading>
            <Text color={'gray.500'}>
            {bar.dayOfWeek} at {bar.time}
            </Text>
          </Stack>
        </Box>
        </Center>
          ))}
    </div>
    </ChakraProvider>
  );
}
}


export default App;
