import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";

import { images } from "../../constants";
import { supabase } from "../../lib/supabase.js";
import { AuthContext } from '../../lib/AuthContext';

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const createUser = async () => {
    if (!form.email || !form.password || !form.username) {
      return Alert.alert("Please fill in all fields.");
    }

    try {
      setIsSubmitting(true);

      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (error) {
        return Alert.alert("Sign Up Error", error.message);
      }

      const user = data.user;

      if (!user) {
        return Alert.alert("Sign-Up Error", "No user returned.");
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: user.id, username: form.username, email: form.email }]);

      if (profileError) {
        return Alert.alert("Profile Error", profileError.message);
      }

      setUser({ id: user.id, username: form.username, email: form.email });

      Alert.alert("Success","Account created! Please check your email to verify your account.");

      router.replace("/home");
    } catch (err) {
      Alert.alert("Unexpected Error", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up for Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title={isSubmitting ? "Signing Up..." : "Sign Up"}
            handPress={createUser}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
