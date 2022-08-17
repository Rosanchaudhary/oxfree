import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppBar from "../widgets/AppBar";
import Filter from "../widgets/Filter";
import PostList from "../widgets/PostList";
import CommentList from "../widgets/CommentList";

const HomeScreen = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "90%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <AppBar />
          </TouchableOpacity>

          <Filter />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <PostList />
            <PostList />
            <PostList />
          </ScrollView>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Comments
              </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <CommentList />
                <CommentList />
                <CommentList />
                <CommentList />
                <CommentList />
              </ScrollView>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  contentContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default HomeScreen;
