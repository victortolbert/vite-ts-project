import { createClient } from '@supabase/supabase-js'

export default class DatabaseService {
  constructor() {
    this.database = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_SECRET_KEY
    )
  }

  getInstance() {
    return this.database;
  }
}
