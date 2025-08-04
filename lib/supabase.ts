import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './supabase-types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://swhylftkrsypvmcfteik.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aHlsZnRrcnN5cHZtY2Z0ZWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzAzODgsImV4cCI6MjA2ODY0NjM4OH0.ZbEzHugQYLWrkLBZVqttCjD11OpRNKqWih14fsbPKEM';

export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);

// TypeScript types for our booking form data
export type BookingSubmission = Database['public']['Tables']['booking_submissions']['Insert'];
export type BookingSubmissionRow = Database['public']['Tables']['booking_submissions']['Row']; 