package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math/rand"
	"net/http"
	"os"
	"strings"
)


type Response struct {
	Name string `json:"name"`
	Pokemon []Pokemon `json:"pokemon_entries"`
}

type Pokemon struct {
	EntryNumber int `json:"entry_number"`
	Species PokemonSpecies `json:"pokemon_species"`
}

type PokemonSpecies struct {
	Name string `json:"name"`
}

func main() {
	handleRequests()
	getRandomPokemon()
}

func handleRequests() {
	http.HandleFunc("/", getRandomPokemonForUser)
	log.Fatal(http.ListenAndServe("127.0.0.1:8081", nil))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func getRandomPokemonForUser(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	name := r.URL.Query().Get("name")
	pokemonList := getRandomPokemon()
	pokemonMessage := strings.Join(pokemonList[:],", ")

	message := fmt.Sprintf("Hi, %v. Welcome to Kento region, we recommend you start with those pokemons: %v", name, pokemonMessage)
	json.NewEncoder(w).Encode(message)
}

func getRandomPokemon() []string{
	response, err := http.Get("http://pokeapi.co/api/v2/pokedex/kanto/")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	responseData, err := io.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}

	var responseObject Response
	json.Unmarshal(responseData, &responseObject)

	randomFivePokemon := rand.Perm(len(responseObject.Pokemon))[0:5]

	var pokemonList []string
	for i := 0; i < len(randomFivePokemon); i++ {
		pokemonName := responseObject.Pokemon[randomFivePokemon[i]].Species.Name
		pokemonList = append(pokemonList, pokemonName)
	}

	return pokemonList
}