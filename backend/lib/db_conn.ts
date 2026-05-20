import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SupabaseUrl!;
const supabaseKey = process.env.SupabaseKey!;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);