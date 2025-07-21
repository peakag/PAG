import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase-types'

const supabaseUrl = 'https://swhylftkrsypvmcfteik.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aHlsZnRrcnN5cHZtY2Z0ZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzAzODgsImV4cCI6MjA2ODY0NjM4OH0.ZbEzHugQYLWrkLBZVqttCjD11OpRNKqWih14fsbPKEM'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// TypeScript types for our booking form data
export type BookingSubmission = Database['public']['Tables']['booking_submissions']['Insert']
export type BookingSubmissionRow = Database['public']['Tables']['booking_submissions']['Row'] 