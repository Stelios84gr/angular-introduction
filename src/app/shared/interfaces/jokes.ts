export interface DadJoke {
    // joke: string;    // δεν επιστρέφει string το api, αλλά object της παρακάτω μορφής (JSON to TypeScript)
  id: string
  joke: string
  status: number
}

export interface ChuckNorrisJoke {
    // value: string;
  categories: any[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}