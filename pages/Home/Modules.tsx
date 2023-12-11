import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ExBox from "../../components/ExBox/ExBox";
import Header from "../../components/Header/Header";
import { getModules } from "../../api/module";
import modulesMock from './fixtures/modules.json';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Modules = ({ onClick }: { onClick: any }) => {
  const [modules, setModules] = useState(modulesMock);

  /**
   * API CALL
   */
  useEffect(() => {
    /**
    const fetchModules = async () => {
      try {
        const modulesData = await getModules();
        setModules(modulesData); // Assuming modulesData is the actual data from the API
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchModules();
    */
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <ExBox
      key={item.id}
      title={item.title}
      description={item.description}
      onClick={() => {
        onClick(item.id);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={modules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={styles.header}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#141415",
    paddingHorizontal: 18
  },
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    width: "100%"
  }
});

export default Modules;