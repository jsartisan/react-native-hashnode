import React from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  Div,
  Avatar,
  Button,
  Image,
  Icon,
  AvatarGroup,
} from 'react-native-magnus';

const posts = [
  {
    title:
      'How Our MongoDB Data Was Kidnapped and How You Can Protect Your MongoDB from Data Kidnappers',
    excerpt:
      'A few months ago I worked on a project and the application data got kidnapped 2 months after our team deployed the application. You might be wondering what Data Kidnapping means. Well, Data Kidnapping is the process of gaining unauthorised access to ...',
    thumbnail:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1584051194938/qoNmBX_qb.png?w=600&fit=crop&crop=entropy&auto=format&q=60',
    tag: '#programming',
    user: {
      name: "Otse Obande's blog",
      thumbnail:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1581335712475/qJkYBP7_B.png?w=200&h=200&fit=crop&crop=faces&auto=format&q=60',
    },
    likesCount: 10,
    comments: [
      {
        comment: 'Comment 1',
        user: {
          name: "Otse Obande's blog",
          thumbnail:
            'https://hashnode.imgix.net/res/hashnode/image/upload/v1581335712475/qJkYBP7_B.png?w=200&h=200&fit=crop&crop=faces&auto=format&q=60',
        },
      },
      {
        comment: 'Comment 2',
        user: {
          name: "Otse Obande's blog",
          thumbnail:
            'https://hashnode.imgix.net/res/hashnode/image/upload/v1582826163162/_rBcUZ9Z1.jpeg?w=50&h=50&fit=crop&crop=faces&auto=format&q=60',
        },
      },
      {
        comment: 'Comment 3',
        user: {
          name: "Otse Obande's blog",
          thumbnail:
            'https://hashnode.imgix.net/res/hashnode/image/upload/v1583971522163/DBhisGLTq.jpeg?w=50&h=50&fit=crop&crop=faces&auto=format&q=60',
        },
      },
    ],
  },
  {
    title: 'Creating a Blog or Docs using Web Components',
    excerpt:
      "Markdown is my jam. I'm always looking for ways to integrate it into my workflows to make authoring content easier for myself (and ideally others). When I started using Web Components, I used them with other SSG (static-site generator) solutions like...",
    thumbnail:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1584134090854/giaZO-cst.png?w=600&fit=crop&crop=entropy&auto=format&q=60',
    tag: '#javascript',
    user: {
      name: 'Ryosuke',
      thumbnail:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1582826163162/_rBcUZ9Z1.jpeg?w=50&h=50&fit=crop&crop=faces&auto=format&q=60',
    },
    comments: [],
  },
  {
    title: 'First Steps in React',
    excerpt:
      "Markdown is my jam. I'm always looking for ways to integrate it into my workflows to make authoring content easier for myself (and ideally others). When I started using Web Components, I used them with other SSG (static-site generator) solutions like...",

    thumbnail:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1584092616655/w4zgIhJlV.png?w=600&fit=crop&crop=entropy&auto=format&q=60',
    tag: '#javascript',
    user: {
      name: 'Kolosek',
      thumbnail:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1581687417734/FM-uImO90.jpeg?w=200&h=200&fit=crop&crop=faces&auto=format&q=60',
    },
    comments: [],
  },
];

const PostList = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item, index }) => (
        <Div
          mx="lg"
          mt="lg"
          mb={index === posts.length - 1 ? 'lg' : 'none'}
          borderWidth={1}
          borderColor="gray200"
          rounded="md">
          <Div borderBottomWidth={1} borderBottomColor="gray200">
            <Text py="md" px="lg" fontWeight="bold" color="gray500">
              {item.tag}
            </Text>
          </Div>
          <Text
            px="lg"
            pt="lg"
            color="black"
            fontWeight="bold"
            fontSize="text600">
            {item.title}
          </Text>
          <Text px="lg" pt="lg" color="gray700">
            {item.excerpt}
          </Text>
          <Div mx="lg">
            <Image
              my="lg"
              rounded="md"
              borderWidth={1}
              borderColor="gray200"
              source={{ uri: item.thumbnail }}
              h={185}
              resizeMode="cover"
              w="100%"
            />
          </Div>
          <Div mx="lg" row alignItems="center">
            <Div flex={1}>
              <Button
                pl="none"
                color="gray900"
                bg="transparent"
                prefix={
                  <Icon
                    fontSize="text700"
                    name="bookmark-o"
                    fontFamily="FontAwesome"
                    mr="lg"
                  />
                }>
                Bookmark
              </Button>
            </Div>

            <Div row alignItems="center">
              <Icon
                color="gray700"
                name="chat-bubble-outline"
                fontFamily="MaterialIcons"
              />
              <Text ml="md">{`${item.comments.length}`}</Text>
            </Div>

            {item.comments.length > 0 && (
              <AvatarGroup ml="md">
                {item.comments.map((comment, index) => (
                  <Avatar
                    key={`comment=${index}`}
                    bg="white"
                    rounded="circle"
                    size={25}
                    source={{ uri: comment.user.thumbnail }}
                  />
                ))}
              </AvatarGroup>
            )}
          </Div>
          <Div row bg="gray100" px="lg" py="lg" mt="sm">
            <Div rounded="circle" row alignItems="center" flex={1}>
              <Avatar
                source={{ uri: item.user.thumbnail }}
                size={25}
                rounded="circle"
                bg="white"
              />
              <Text ml="md">{item.user.name}</Text>
            </Div>

            {item.likesCount && (
              <Div row alignItems="center">
                <Text ml="md">{`${item.likesCount} likes`}</Text>
              </Div>
            )}

            <Div row alignItems="center">
              <Button
                rounded="circle"
                bg="transparent"
                alignSelf="center"
                underlayColor="gray200"
                ml="lg">
                <Icon name="dots-three-horizontal" fontFamily="Entypo" />
              </Button>
            </Div>
          </Div>
        </Div>
      )}
    />
  );
};

export default PostList;
