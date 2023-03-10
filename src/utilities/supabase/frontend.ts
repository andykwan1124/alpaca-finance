import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const frontendSupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default frontendSupabaseClient