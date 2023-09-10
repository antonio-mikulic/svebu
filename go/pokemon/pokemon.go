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
	"sync"
	"time"
)

func HandleRequests() {
	fmt.Println("Listening on port 8081")
	http.HandleFunc("/", getRandomPokemonForUser)
	log.Fatal(http.ListenAndServe("127.0.0.1:8081", nil))

}

func getRandomPokemonForUser(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	start := time.Now()

	pokemonList := getRandomPokemon()
	pokemonData := make(chan pokemon.PokemonData, len(pokemonList))
	wg := &sync.WaitGroup{}
	wg.Add(len(pokemonList))

	for i := 0; i < len(pokemonList); i++ {
		go getPokemonDetails(pokemonList[i], pokemonData, wg)
	}

	wg.Wait()
	close(pokemonData)

	result := make([]pokemon.PokemonData, len(pokemonList))
	for i := 0; i < len(pokemonList); i++ {
		result[i] = <-pokemonData
	}

	fmt.Println("Time taken to get all pokemon details: ", time.Since(start))

	json.NewEncoder(w).Encode(result)
}

func getRandomPokemon() []string {
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

func getPokemonDetails(pokemonName string, chn chan pokemon.PokemonData, wg *sync.WaitGroup) {
	start := time.Now()
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

	chn <- responseObject
	wg.Done()
	fmt.Println("Time taken to get pokemon details for ", pokemonName, " : ", time.Since(start))
}
