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
          tabBarLabel: "HOME",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "WISHLIST",
          tabBarIcon: ({ color }) => (
            <Foundation name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarLabel: "BAG",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-bag" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
