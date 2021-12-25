import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../assets/colors";
import Data from "../assets/data.json";

function getComments(item) {
  var replies = [];
  const commentsData = item.comments;
  const numComments = commentsData.length;
  for (let i = 0; i < numComments; i++) {
    const commentText = commentsData[i].body;
    replies.push(commentText);
  }
  return replies;
}

const Details = ({ route }) => {
  const { item } = route.params;
  const renderComments = ({ item }) => {
    return (
      <View style={styles.comment}>
        <Text style={styles.commentText}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator="false">
        {/* Banner */}
        <View style={styles.headerBanner}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
          <View style={styles.bannerStack}>
            <Image
              source={{ uri: item.author.image }}
              style={styles.profileImage}
            />
            <View style={styles.bannerStackTwo}>
              <Text
                style={{ fontSize: "16", color: "white", fontWeight: "bold" }}
              >
                {item.author.username}
              </Text>
              <Text
                style={{
                  color: colors.borderDarker,
                  fontWeight: "bold",
                  fontSize: "12",
                }}
              >
                {item.createdAt}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{item.body}</Text>
          <Text style={{ color: colors.border }}>
            ___________________________________
          </Text>
        </View>
        {/* Comments */}
        <View style={styles.commentSection}>
          <Text style={styles.CommentTitle}>Comments</Text>

          <View style={styles.commentWrapper}>
            <FlatList
              data={getComments(item)}
              renderItem={renderComments}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View style={styles.spacer}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },

  headerLogo: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },

  headerBanner: {
    width: "100%",
    backgroundColor: colors.dark,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    color: colors.secondary,
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 7,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 20,
    marginRight: 10,
  },
  bannerStack: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
  },
  description: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "700",
  },

  commentSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  CommentTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
  },
  commentWrapper: {
    marginTop: 20,
  },
  comment: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.borderDark,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  commentText: {
    fontSize: 12,
    fontWeight: "600",
  },
  spacer: {
    height: 500,
  },
});
export default Details;
