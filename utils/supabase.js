import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bstggvyyxwdjkcdkyidq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzdGdndnl5eHdkamtjZGt5aWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3MjMzOTAsImV4cCI6MTk5NTI5OTM5MH0.1PFDd_mwjjElmeq8tRWQZ8vuwMTBDhGkgUll07F9880"
);

export default supabase;
