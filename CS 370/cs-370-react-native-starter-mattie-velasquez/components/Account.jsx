import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { View, Text, Image, ScrollView, Alert, ActivityIndicator, TextInput, Button, StyleSheet } from "react-native";

import { CustomButton } from "../../components/CustomButton";

export default function ManageAccount({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar_url")
        .eq("id", session.user.id)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        setUsername(data.username ?? "");
        setWebsite(data.website ?? "");
        setAvatarUrl(data.avatar_url ?? "");
      }
    } catch (error) {
      Alert.alert("Error",String(error));
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;

      Alert.alert("Success","Profile updated!");
    } catch (error) {
      Alert.alert("Error",String(error));
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Website</Text>
      <TextInput
        style={styles.input}
        value={website}
        onChangeText={setWebsite}
        placeholder="Enter your website"
      />

      <Text style={styles.label}>Avatar URL</Text>
      <TextInput
        style={styles.input}
        value={avatarUrl}
        onChangeText={setAvatarUrl}
        placeholder="Enter avatar URL"
      />

      {avatarUrl ? <Image source={{ uri: String(avatarUrl) }} style={styles.avatar} /> : null}

      <Button
        title="Save Changes"
        onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
      />
    </ScrollView>
  );
}