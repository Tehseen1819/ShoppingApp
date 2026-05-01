import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "HOME",
          tabBarActiveTintColor: "#B80041",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          headerShown: false,
          tabBarLabel: "WISHLIST",
          tabBarActiveTintColor: "#B80041",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <Foundation name="heart" color={color} size={24} />
          ),
          // title: "WISHLIST",
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          headerShown: false,
          tabBarLabel: "BAG",
          tabBarActiveTintColor: "#B80041",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-bag" color={color} size={24} />
          ),
          title: "BAG",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
