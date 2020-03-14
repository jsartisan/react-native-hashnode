import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollDiv } from 'react-native-magnus';

import CategoryList from '../components/categories/CategoryList';
import PostFilter from '../components/posts/PostFilter';
import PostList from '../components/posts/PostList';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollDiv>
        <CategoryList />
        <PostFilter />
        <PostList />
      </ScrollDiv>
    </SafeAreaView>
  );
}
