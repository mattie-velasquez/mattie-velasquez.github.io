import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = "https://wuwpqqyfctdhliqjnzzp.supabase.co";
const supabasePublishableKey = "sb_publishable_k7GvnrSrAz_hLLIjpNeOYg_qk9aEPKg";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
