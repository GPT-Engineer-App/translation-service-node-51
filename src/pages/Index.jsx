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

        <FormControl id="language">
          <FormLabel>Select Language</FormLabel>
          <Select placeholder="Select language" onChange={handleLanguageChange}>
            {/* These options would typically be fetched from your backend */}
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </Select>
        </FormControl>

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
