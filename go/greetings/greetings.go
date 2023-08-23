package greetings

import "fmt"

func Hello(name string) string {
	message := fmt.Sprintf("Hi, %v. Welcome to Kento region, we recommend you start with those pokemons:", name)
	return message
}