
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://cwpgmkocgvfhkpwjntrl.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cGdta29jZ3ZmaGtwd2pudHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1OTE2ODUsImV4cCI6MjA0MDE2NzY4NX0.7CIcZGltRyr_uc1Td5fqlpv8KXMcz4PMs9J5hjZRPDM`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase