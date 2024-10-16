import React from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5B4CCC',
        headerShown: true,
        tabBarStyle: {
          height: 60
        },
        tabBarLabelStyle: {
          marginBottom: 3,
          fontSize: 12
        },
      }}
    >
      <Tabs.Screen
        name="shipments"
        options={{
          title: "Shipments",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('@/assets/nav/shipment-colored.png') : require('@/assets/nav/shipment.png')}
            />
          ),
          headerLeft: () => (
            <Image
              source={require('@/assets/icons/avatar.png')}
              style={{ marginLeft: 16 }}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('@/assets/images/logo.png')}
              style={{ marginLeft: 90 }}
            />
          ),
          headerRight: () => (
            <Image
              source={require('@/assets/icons/bell.png')}
              style={{ marginRight: 16 }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('@/assets/nav/scan-colored.png') : require('@/assets/nav/scan.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('@/assets/nav/wallet-colored.png') : require('@/assets/nav/wallet.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('@/assets/nav/profile-colored.png') : require('@/assets/nav/profile.png')}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;