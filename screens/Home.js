import { React, useState, useEffect } from "react";
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
import Popular from "../assets/popularTags";
import Data from "../assets/data.json";

const data = Data.articles;
// console.log("___________________________________");
// console.log(Data.articles[0].tagList);
function getTags(item) {
  var taglist = [];
  const tags = item.tagList;
  const numtags = tags.length;
  for (let i = 0; i < numtags; i++) {
    const tag = tags[i];
    taglist.push(tag);
  }
  return taglist;
}


const Home = ({ navigation }) => {
  const renderPopularData = ({ item }) => {
    return (
      <View style={styles.tagsContainer}>
        <TouchableOpacity>
          <View
            style={[
              styles.tag,
              {
                marginLeft: item.id == 1 ? 20 : 0,
              },
            ]}
          >
            <Text style={styles.tagsText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };


  const renderCategoryItem = ({ item }) => {
    return (
      // Feed
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <View style={[styles.feed, { marginBottom: item.id == 1 ? 80 : 0 }]}>
          <View style={styles.feedHeader}>
            <Image
              source={{ uri: item.author.image }}
              style={styles.profileImage}
            />
            <View style={styles.headerRight}>
              <View style={styles.verticalStack}>
                <Text style={styles.username}>{item.author.username}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 2,
                    color: colors.borderDarker,
                  }}
                >
                  {item.createdAt}
                </Text>
              </View>
              <TouchableOpacity style={styles.likeContainer}>
                <AntDesign name="heart" size="16" color={colors.primary} />
                <Text style={styles.favoritesCount}>{item.favoritesCount}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.feedMid}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.feedBottom}>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read more..</Text>
            </TouchableOpacity>
            <View style={styles.tagsWrapper}>
              <Text style = {{color: 'grey'}}>{getTags(item)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={StyleSheet.container}>
      {/* Header */}
      <ScrollView showsVerticalScrollIndicator="false">
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity>
              <Text style={styles.headerLogo}>vibes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <AntDesign name="user" size={25} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* Banner */}

        <View style={styles.headerBanner}>
          <Text style={styles.bannerTitle}>vibes</Text>
          <Text style={styles.bannerSubTitle}>
            A place to share your knowledge.
          </Text>
        </View>
        {/* Popular Tags Section */}
        <View style={styles.popularSection}>
          <Text style={styles.popularTagsText}>Popular Tags</Text>
          <View style={styles.PopularListWrapper}>
            <FlatList
              data={Popular}
              renderItem={renderPopularData}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              // numColumns= {2}
            />
          </View>
        </View>
        {/* Global Feed Thing */}
        <View style={styles.selectionTab}>
          <TouchableOpacity>
            <Text style={styles.globalFeedText}>Global Feed</Text>
          </TouchableOpacity>
          <View style={styles.horizontalSeperator}>
            <Text style={styles.greenLine}>______________</Text>
            <Text style={styles.grayLine}>_______________________________</Text>
          </View>
        </View>

        {/* Feeds */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Footer */}
        <View style={styles.footerWrapper}>
          <View style={styles.iconsWrapper}>
            <AntDesign name="twitter" size={30} color="#3BD5FF" />
            <AntDesign
              name="instagram"
              size={30}
              color="#D46D24"
              style={{ marginLeft: 10 }}
            />
            <AntDesign
              name="facebook-square"
              size={30}
              color="#227AEF"
              style={{ marginLeft: 10 }}
            />
          </View>
          <Text style={styles.footerTopText}>© 2021 vibes</Text>
          <Text style={styles.footerBottomText}>All Rights Reserved.</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },

  headerLogo: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary,
  },
  headerBanner: {
    width: "100%",
    backgroundColor: colors.primary,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 7,
  },
  bannerSubTitle: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "400",
  },
  selectionTab: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  globalFeedText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
  },
  horizontalSeperator: {
    flexDirection: "row",
  },
  greenLine: {
    color: colors.primary,
    fontWeight: "700",
  },
  grayLine: {
    color: colors.border,
  },

  feed: {
    marginTop: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  feedHeader: {
    flexDirection: "row",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  headerRight: {
    paddingLeft: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  username: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: "500",
    // marginRight: 170,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: colors.primary,
    borderWidth: 1.5,
    width: 60,
    height: 30,
    borderRadius: 5,
  },
  favoritesCount: {
    color: colors.primary,
    marginLeft: 2,
  },
  feedMid: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: colors.borderDark,
  },
  feedBottom: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  readMore: {
    color: colors.borderDarker,
  },

  tagbox: {
    borderColor: colors.borderDark,
    borderWidth: 1.5,
    width: 70,
    borderRadius: 15,
  },

  popularSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  popularTagsText: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: colors.primary,
    fontWeight: "600",
    marginBottom: 20,
  },

  PopularListWrapper: {
    flexDirection: "row",
  },
  tagsText: {
    fontSize: 13,
    fontWeight: "600",
  },
  tag: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 2,
    width: 80,
    height: 40,
    marginRight: 15,
  },
  footerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    height: 100,
    marginTop: 30,
    borderTopWidth: 2,
    borderTopColor: "#E4E2E2",
  },
  iconsWrapper: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
  },
  footerTopText: {
    fontSize: 15,
    fontFamily: "Arial Rounded MT Bold",
    color: "#676767",
  },
  footerBottomText: {
    fontSize: 12,
    fontFamily: "Arial Rounded MT Bold",
    color: "#676767",
  },
  spacer: {
    height: 300,
  },
  tagsWrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    borderRadius: 15,
  },
});

export default Home;
