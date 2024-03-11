import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaSave, FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [translationKey, setTranslationKey] = useState("");
  const [translationValue, setTranslationValue] = useState("");
  const toast = useToast();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleKeyChange = (event) => {
    setTranslationKey(event.target.value);
  };

  const handleValueChange = (event) => {
    setTranslationValue(event.target.value);
  };

  const handleSave = () => {
    toast({
      title: "Translation Saved",
      description: `The translation for "${translationKey}" has been saved in "${selectedLanguage}".`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // TODO: Here you would send a request to your backend to save the data
  };

  const handleImport = () => {
    // TODO: Here you would trigger a file input to upload a JSON file and send it to the backend
  };

  return (
    <Box p={4}>
      <VStack spacing={6}>
        <Heading>Translation Service</Heading>

        <FormControl id="translation-key">
          <FormLabel>Select Translation Key</FormLabel>
          <Select placeholder="Select translation key" onChange={handleKeyChange}>
            {}
            <option value="welcome_message">Welcome Message</option>
            <option value="goodbye_message">Goodbye Message</option>
            <option value="thank_you_message">Thank You Message</option>
          </Select>
        </FormControl>

        {}
        {}
        <Box border="1px" borderColor="gray.200" p={4}>
          <Heading size="md">Translations:</Heading>
          <Text>English: "Welcome!"</Text>
          <Text>Spanish: "¡Bienvenido!"</Text>
          <Text>French: "Bienvenue!"</Text>
        </Box>

        <FormControl id="translation-key">
          <FormLabel>Translation Key</FormLabel>
          <Input value={translationKey} onChange={handleKeyChange} placeholder="Enter translation key" />
        </FormControl>

        <FormControl id="translation-value">
          <FormLabel>Translation Value</FormLabel>
          <Textarea value={translationValue} onChange={handleValueChange} placeholder="Enter translation value" />
        </FormControl>

        <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSave}>
          Save Translation
        </Button>

        <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleImport}>
          Import Translations
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
