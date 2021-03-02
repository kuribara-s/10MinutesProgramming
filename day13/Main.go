package main

import "fmt"

func main() {
	var v, t, s, d, vanishS, vanishE int
	fmt.Scan(&v, &t, &s, &d)
	vanishS = v * t
	vanishE = v * s

	if vanishS <= d && d <= vanishE {
		fmt.Println("No")
	} else {
		fmt.Println("Yes")
	}
}
