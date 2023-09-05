package pokemon

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math/rand"
	"net/http"
	"os"
	pokemon "svebu/pokemon/models"
)

func HandleRequests() {
	http.HandleFunc("/", getRandomPokemonForUser)
	log.Fatal(http.ListenAndServe("127.0.0.1:8081", nil))
}

func getRandomPokemonForUser(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	pokemonList := getRandomPokemon()
	var pokemonData []pokemon.PokemonData
	for i := 0; i < len(pokemonList); i++ {
		pokemonData = append(pokemonData, getPokemonDetails(pokemonList[i]))
	}

	json.NewEncoder(w).Encode(pokemonData)
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

	var responseObject pokemon.RegionResponse
	json.Unmarshal(responseData, &responseObject)

	randomFivePokemon := rand.Perm(len(responseObject.Pokemon))[0:5]

	var pokemonList []string
	for i := 0; i < len(randomFivePokemon); i++ {
		pokemonName := responseObject.Pokemon[randomFivePokemon[i]].Species.Name
		pokemonList = append(pokemonList, pokemonName)
	}

	return pokemonList
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func getPokemonDetails(pokemonName string) pokemon.PokemonData {
	response, err := http.Get("http://pokeapi.co/api/v2/pokemon/" + pokemonName)

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	responseData, err := io.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}

	var responseObject pokemon.PokemonData
	json.Unmarshal(responseData, &responseObject)

	return responseObject
}