package pokemon

type RegionResponse struct {
	Name string `json:"name"`
	Pokemon []PokemonMetadata `json:"pokemon_entries"`
}

type PokemonMetadata struct {
	EntryNumber int `json:"entry_number"`
	Species PokemonSpecies `json:"pokemon_species"`
}

type PokemonSpecies struct {
	Name string `json:"name"`
}
