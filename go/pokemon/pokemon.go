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
	pokemonData := make(chan PokemonDetailsChannelHolder, len(pokemonList))
	wg := &sync.WaitGroup{}
	wg.Add(len(pokemonList))

	for i := 0; i < len(pokemonList); i++ {
		go getPokemonDetails(pokemonList[i], pokemonData, wg)
	}

	wg.Wait()
	close(pokemonData)

	result := make([]pokemon.PokemonData, 0)
	for i := 0; i < len(pokemonList); i++ {
		pokemon := <-pokemonData
		if pokemon.IsSuccessful {
			result = append(result, pokemon.PokemonDetails)
		}
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

func getPokemonDetails(pokemonName string, chn chan PokemonDetailsChannelHolder, wg *sync.WaitGroup) {
	start := time.Now()
	response, err := http.Get("http://pokeapi.co/api/v2/pokemon/" + pokemonName)

	if err != nil {
		chn <- PokemonDetailsChannelHolder{Name: pokemonName, IsSuccessful: false}
		log.Default().Printf("Error getting pokemon details for %s: %s", pokemonName, err.Error())
		wg.Done()
		return
	}

	responseData, ioErr := io.ReadAll(response.Body)
	if ioErr != nil {
		chn <- PokemonDetailsChannelHolder{Name: pokemonName, IsSuccessful: false}
		log.Default().Printf("Error reading pokemon details for %s: %s", pokemonName, ioErr.Error())
		wg.Done()
		return
	}

	var responseObject pokemon.PokemonData
	json.Unmarshal(responseData, &responseObject)

	if responseObject.Name == "" {
		chn <- PokemonDetailsChannelHolder{Name: pokemonName, IsSuccessful: false}
		log.Default().Printf("Error unmarshalling pokemon details for %s", pokemonName)
		wg.Done()
		return
	}

	if responseObject.ID > 136 {
		chn <- PokemonDetailsChannelHolder{Name: pokemonName, IsSuccessful: false}
		log.Default().Printf("%s is not recommended to new players", pokemonName)
		wg.Done()
		return
	}

	chn <- PokemonDetailsChannelHolder{Name: pokemonName, IsSuccessful: true, PokemonDetails: responseObject}
	wg.Done()

	fmt.Println("Time taken to get pokemon details for ", pokemonName, " : ", time.Since(start))
}

type PokemonDetailsChannelHolder struct {
	Name           string
	IsSuccessful   bool
	PokemonDetails pokemon.PokemonData
}
