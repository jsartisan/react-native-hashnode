import React from 'react';
import { FlatList } from 'react-native';
import { Text, Div, Button } from 'react-native-magnus';

const categories = ['WhoIsHiring', 'ShowHashnode', 'DevRant', 'DevRant', 'TIL'];

const CategoryList = () => {
  return (
    <Div mx="lg" mt="lg" borderWidth={1} borderColor="gray200" rounded="md">
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <Button mx="md" py="sm" color="gray700" bg="transparent">
            <Text>#{item}</Text>
          </Button>
        )}
        horizontal
        ListHeaderComponent={
          <Text mx="lg" py="sm" color="black" fontWeight="500">
            My Feed
          </Text>
        }
      />
    </Div>
  );
};

export default CategoryList;
