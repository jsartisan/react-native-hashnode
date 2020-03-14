import React from 'react';
import { Button, Text, Image, Dropdown, Div } from 'react-native-magnus';

const dropdownRef = React.createRef();

const PostFilter = () => {
  return (
    <>
      <Button
        mx="lg"
        px="lg"
        mt="lg"
        block
        bg="transparent"
        borderWidth={1}
        borderColor="gray200"
        justifyContent="flex-start"
        underlayColor="gray100"
        onPress={() => dropdownRef.current.open()}>
        <Text flex={1}>Recommended for you</Text>
        <Image h={20} w={20} source={require('../../images/recommended.png')} />
      </Button>

      <Dropdown.Container
        ref={dropdownRef}
        title={
          <Div alignItems="center" mt="lg" mb="xl">
            <Image
              h={50}
              w={50}
              source={require('../../images/recommended.png')}
            />
            <Text mt="lg" fontWeight="bold">
              My feed shows you recommended posts first
            </Text>
          </Div>
        }
        mt="md"
        showScrollIndicator={true}
        message="This is the long message used to set some context"
        roundedTop="xl">
        <Dropdown.Option
          bg="gray100"
          rounded="lg"
          mx="lg"
          py="md"
          px="xl"
          color="gray900"
          alignItems="center"
          block>
          <Image source={require('../../images/recent.png')} h={20} w={20} />
          <Text ml="lg">See recent posts instead</Text>
        </Dropdown.Option>
      </Dropdown.Container>
    </>
  );
};

export default PostFilter;
