package com.movie.controller;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.model.Movie;
import com.movie.service.MovieService;

@RestController
@RequestMapping("/api")
public class libraryController {

	@Autowired
	private MovieService movieService;


	@CrossOrigin
	@RequestMapping(value = "/movie/add", method = RequestMethod.POST)
	//@ResponseBody
	Movie newMovie(@RequestBody Movie movie) throws IOException {

		return movieService.newMovie(movie);

	}
	@CrossOrigin
	@PostMapping("/movie/search")
	//@ResponseBody
	List<Movie> searchMovie(@RequestBody Movie movie) throws IOException {

		return movieService.searchMovie(movie);

	}
	@CrossOrigin
	@RequestMapping(value = "/movie/update/{index}", method = RequestMethod.POST)
	@ResponseBody
	Movie updateMovie(@PathVariable("index") int index, @RequestBody Movie movie) throws IOException, ParseException {
		return movieService.updateMovie(index, movie);

	}
	@CrossOrigin
	@RequestMapping(value = "/movie/delete/{index}", method = RequestMethod.GET)
	@ResponseBody
	void deleteMovie(@PathVariable("index") int index) throws IOException {
		movieService.deleteMovie(index);
	}
	@CrossOrigin
	@RequestMapping(value = "/movie/get/{index}", method = RequestMethod.GET)
	@ResponseBody
	Movie getMovie(@PathVariable("index") int index) throws IOException {
		return movieService.getMovie(index);
	}
	@CrossOrigin
	@GetMapping("/movie/list")
	@ResponseBody
	List<Movie> all() throws IOException {
		return movieService.getAllMovies();
	}
}
